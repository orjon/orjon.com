import { useCallback, useEffect, useRef } from 'react'
import type { EmblaCarouselType, EmblaEventType } from 'embla-carousel'
import { numberWithinRange } from '@/app/utils'

const TWEEN_FACTOR_BASE = 1.5

export function useEmblaOpacityTween(emblaApi: EmblaCarouselType | undefined) {
  const tweenFactor = useRef(0)

  const setTweenFactor = useCallback((api: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * api.scrollSnapList().length
  }, [])

  const tweenOpacity = useCallback(
    (api: EmblaCarouselType, event?: EmblaEventType) => {
      const engine = api.internalEngine()
      const scrollProgress = api.scrollProgress()
      const slidesInView = api.slidesInView()
      const isScrollEvent = event === 'scroll'

      api.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        const slidesInSnap = [snapIndex]

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          let diffToTarget = scrollSnap - scrollProgress

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
          const opacity = numberWithinRange(tweenValue, 0, 1).toString()
          const node = api.slideNodes()[slideIndex]
          if (node) node.style.opacity = opacity
        })
      })
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return

    setTweenFactor(emblaApi)
    tweenOpacity(emblaApi)

    emblaApi
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('slideFocus', tweenOpacity)

    return () => {
      emblaApi.off('reInit', setTweenFactor)
      emblaApi.off('reInit', tweenOpacity)
      emblaApi.off('scroll', tweenOpacity)
      emblaApi.off('slideFocus', tweenOpacity)
    }
  }, [emblaApi, setTweenFactor, tweenOpacity])
}

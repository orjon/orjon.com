import { FaAngleRight, FaAngleLeft } from "react-icons/fa6"

const navArrowStyle = "drop-shadow-md hover:drop-shadow-lg"

interface ProjectsCarouselControlsProps {
  onPrev: () => void
  onNext: () => void
}

const ProjectsCarouselControls = ({ onPrev, onNext }: ProjectsCarouselControlsProps) => {
  return (
    <>
      <div className="flex w-full border-t border-menuButton z-10 sm:hidden shadow-[0_-4px_8px_rgba(0,0,0,0.15)]">
        <div
          onClick={onPrev}
          className='embla__prev flex flex-1 justify-center align-center cursor-pointer text-4xl py-2 hover-scale-120'>
          <FaAngleLeft className={navArrowStyle} />
        </div>
        <div
          onClick={onNext}
          className='embla__next flex flex-1 justify-center align-center cursor-pointer text-4xl py-2 hover-scale-120'>
          <FaAngleRight className={navArrowStyle} />
        </div>
      </div>
      <div className="hidden sm:flex absolute inset-0 z-10 content-1600 items-center justify-between pointer-events-none">
        <div
          onClick={onPrev}
          className='embla__prev flex cursor-pointer text-6xl md:pl-1 justify-start hover-scale-120 pointer-events-auto'>
          <FaAngleLeft className={navArrowStyle} />
        </div>
        <div
          onClick={onNext}
          className='embla__next flex cursor-pointer text-6xl md:pr-1 justify-end hover-scale-120 pointer-events-auto'>
          <FaAngleRight className={navArrowStyle} />
        </div>
      </div>
    </>
  )
}

export default ProjectsCarouselControls



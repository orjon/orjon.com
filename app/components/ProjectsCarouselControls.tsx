import { FaAngleRight, FaAngleLeft } from "react-icons/fa6"

const navArrowStyle = "drop-shadow-md hover:drop-shadow-lg"

interface ProjectsCarouselControlsProps {
  onPrev: () => void
  onNext: () => void
}

const ProjectsCarouselControls = ({ onPrev, onNext }: ProjectsCarouselControlsProps) => {
  return (
    <div className="absolute inset-0 z-10 content-1600 flex items-center justify-between pointer-events-none">
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
  )
}

export default ProjectsCarouselControls

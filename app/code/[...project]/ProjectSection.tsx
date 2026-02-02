const ProjectSection = ({ title, children }: { title: string, children: React.ReactNode }) => {
  return (
    <div className='ProjectSection w-full flex flex-col gap-1'>
      <div className='text-base sm:text-lg md:text-xl font-semibold'>{title}</div>
      {children}
    </div>
  )
}

export default ProjectSection
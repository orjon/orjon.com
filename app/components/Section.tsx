const Section = ({ title = undefined, children }: { title?: string, children: React.ReactNode }) => {

  const headingGap = 'gap-1'

  return (
    <div className={`Section flex flex-col w-full ${headingGap}`}>
      {title && <div className='text-base sm:text-lg md:text-xl font-semibold'>{title}</div>}
      {children}
    </div>
  )
}

export default Section
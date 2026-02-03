const Section = ({ title, children }: { title: string, children: React.ReactNode }) => {
  return (
    <div className='Section flex flex-col'>
      <div className='text-base sm:text-lg md:text-xl font-semibold'>{title}</div>
      {children}
    </div>
  )
}

export default Section
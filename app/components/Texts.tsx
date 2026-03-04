export const Summary = ({ text }: { text: string }) => {
  return (
    <div className={`Summary w-full sm:w-auto text-base md:text-lg text-center  font-medium`}>
      <div className='inline-block text-justify'>{text}</div>
    </div>
  )
}

export const Paragraphs = ({ text }: { text: string }) => {
  return (
    <div className='Paragraphs w-full text-base md:text-lg'>
      {text.split('\n').map((paragraph, index) => (
        <p key={index} className={`w-full text-justify wrap-break-word ${index > 0 ? 'mt-2' : ''}`}>
          {paragraph}
        </p>
      ))}
    </div>
  )
}

export const Note = ({ text }: { text: string }) => {
  return (
    <div className='Note w-full text-menuButton italic text-right text-xs sm:text-sm md:text-base font-medium'>{text}</div>
  )
}


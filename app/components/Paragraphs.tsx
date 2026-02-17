const Paragraphs = ({ text }: { text: string }) => {
  return (
    <>
      {text.split('\n').map((paragraph, index) => (
        <p key={index} className={index > 0 ? 'mt-2' : ''}>
          {paragraph}
        </p>
      ))}
    </>
  )
}

export default Paragraphs

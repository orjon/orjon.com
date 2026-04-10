const Analytics = ({ id }: { id?: string }) => {
  if (!id) return null

  return (
    <script
      defer
      src="https://analytics.orjon.com/script.js"
      data-website-id={id}
    />
  )
}

export default Analytics

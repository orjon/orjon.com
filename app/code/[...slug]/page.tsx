const ProjectPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  console.log(params)

  if (!slug) {
    return <div>No slug provided</div>
  }

  return (
    <div>
      <h1>Project Page: {slug}</h1>
    </div>
  )
}
export default ProjectPage

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <h1>Project Page: {params.slug}</h1>
    </div>
  )
}
export default ProjectPage

import ProjectsView from '@/app/code/ProjectsView'

const CodePage = async ({
  searchParams
}: {
  searchParams: Promise<{ view?: string }>
}) => {
  const { view = 'tile' } = await searchParams

  return <ProjectsView initialView={view === 'tile' ? 'tile' : 'card'} />
}
export default CodePage

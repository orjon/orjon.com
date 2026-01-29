import { Project } from '../types'

const ProjectTechnologies = ({ project, large = false }: { project: Project, large?: boolean }) => {
  const { technologies } = project

  const projectTechnologies = technologies.sort((a, b) => a.localeCompare(b)).map(technology => {
    return (
      <li
        key={technology}
        className={`text-white font-medium bg-menuButton rounded-sm px-2 py-px ${large ? 'text-base' : 'text-xs'}`}>
        {technology}
      </li>
    )
  })

  return (
    <ul className={`flex flex-wrap text-[12px] gap-${large ? '2' : '1'} b-blue`}>{projectTechnologies}</ul>
  )
}

export default ProjectTechnologies

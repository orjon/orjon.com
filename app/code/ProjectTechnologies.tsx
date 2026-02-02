import { Project } from '../types'

const ProjectTechnologies = ({ project, responsive = false }: { project: Project, responsive?: boolean }) => {
  const { technologies } = project

  const projectTechnologies = technologies.sort((a, b) => a.localeCompare(b)).map(technology => {
    return (
      <li
        key={technology}
        className={`text-white font-medium bg-menuButton rounded-sm px-2 py-px text-sm ${responsive && 'sm:text-base'}`}>
        {technology}
      </li>
    )
  })

  return (
    <ul className={`flex flex-wrap text-[12px] gap-1 ${responsive && 'sm:gap-2'}`}>{projectTechnologies}</ul>
  )
}

export default ProjectTechnologies

import Link from 'next/link'
import { Project } from '../types'

import { FaGithub } from 'react-icons/fa'

const ProjectGitHubLink = ({ project }: { project: Project }) => {

  return (
    <div className="w-full flex items-center gap-2">
      <Link
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 sm:max-w-[200px] bg-black hover:bg-grey400 flex items-center justify-center gap-2 font-medium text-white py-1 px-2 rounded-md duration-150"
      >
        <FaGithub />gitHub
      </Link>
    </div>
  )
}

export default ProjectGitHubLink

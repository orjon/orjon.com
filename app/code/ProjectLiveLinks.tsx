import Link from 'next/link'
import { Project } from '../types'

import { HiOutlineDeviceMobile } from "react-icons/hi";
import { MdOutlineDesktopWindows } from "react-icons/md";

const ProjectLiveLinks = ({ project }: { project: Project }) => {
  const { www, responsive } = project

  const links = [
    { label: 'desktop', href: www, icon: <MdOutlineDesktopWindows /> },
    // { label: 'Mobile', href: www, icon: <HiOutlineDeviceMobile /> }
    // { label: 'GitHub', href: github }
  ]
  responsive && links.push({ label: 'mobile', href: www, icon: <HiOutlineDeviceMobile /> })

  return (
    <div className="w-full flex items-center gap-2">
      {links.map(({ label, icon, href }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 max-w-[200px] bg-code flex items-center justify-center gap-2  font-medium text-white py-1 px-2 rounded-md"
        >
          {icon}{label}
        </Link>
      ))}
    </div>
  )
}

export default ProjectLiveLinks

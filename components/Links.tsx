import Link from 'next/link'

import { HiOutlineDeviceMobile } from "react-icons/hi";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { FaGithub } from 'react-icons/fa';

const projectLinkStyle = "flex-1 sm:max-w-[200px] lg:w-[200px] rounded-md p-1 md:p-2 flex items-center justify-center gap-2 font-medium md:font-semibold text-white text-lg duration-150"


const PreviewLinks = ({ www, responsive }: { www: string, responsive: boolean }) => {
  const links = [
    { label: 'desktop', href: www, icon: <MdOutlineDesktopWindows /> },
  ]
  responsive && links.push({ label: 'mobile', href: www, icon: <HiOutlineDeviceMobile /> })

  return (
    <div className="w-full flex items-center gap-3">
      {links.map(({ label, icon, href }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${projectLinkStyle} bg-blue-700 hover:bg-blue-600`}>
          {icon}{label}
        </Link>
      ))}
    </div>
  )
}

const GitHubLink = ({ href }: { href: string }) => {

  return (
    <div className="w-full flex items-center">
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${projectLinkStyle} bg-black hover:bg-grey400`}>
        <FaGithub />gitHub
      </Link>
    </div>
  )
}

export { PreviewLinks, GitHubLink }

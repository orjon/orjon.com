import { HiOutlineDeviceMobile } from "react-icons/hi";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { FaGithub } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";
import { IoMdPin } from "react-icons/io";

export enum ButtonType {
  DESKTOP = 'desktop',
  MOBILE = 'mobile',
  WWW = 'www',
  GITHUB = 'github',
  MAP = 'map',
}


type Button = {
  label: string
  icon: React.ReactNode
  style: string
}


const projectLinkStyle = "flex-1 md:max-w-[300px] rounded-md p-1 md:p-2 flex items-center justify-center gap-2 font-medium md:font-semibold text-white text-lg duration-250"


export const buttonTypes: Record<ButtonType, Button> = {
  [ButtonType.DESKTOP]: {
    label: 'desktop',
    icon: <MdOutlineDesktopWindows />,
    style: `${projectLinkStyle} bg-blue-700 hover:bg-blue-600`,
  },
  [ButtonType.MOBILE]: {
    label: 'mobile',
    icon: <HiOutlineDeviceMobile />,
    style: `${projectLinkStyle} bg-blue-700 hover:bg-blue-600`,
  },
  [ButtonType.WWW]: {
    label: 'website',
    icon: <TbWorldWww />,
    style: `${projectLinkStyle} bg-blue-700 hover:bg-blue-600`,
  },
  [ButtonType.GITHUB]: {
    label: 'gitHub',
    icon: <FaGithub />,
    style: `${projectLinkStyle} bg-black hover:bg-grey400`,
  },
  [ButtonType.MAP]: {
    label: 'Street View',
    icon: <IoMdPin />,
    style: `${projectLinkStyle} bg-green-700 hover:bg-green-600`,
  },
}

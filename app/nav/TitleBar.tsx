"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

import { Sections } from "@/app/types"

const Titlebar = () => {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean) || []
  const section = segments[0]
  const isMe = section === Sections.ME

  const opacityTransitionStyle = "transition-opacity duration-250"

  return (
    <header className="relative z-10 shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
      <nav className="flex flex-col bg-menuButton border-b border-menuButtonDark sm:bg-titleBar text-menuText">
        <div className="content-1600 flex flex-row justify-between items-center px-4 py-1 sm:px-2">
          <div className="text-black text-2xl flex items-center">
            <Link href="/" className="font-bold">
              orjon.com
            </Link>
            <div className="font-medium md:hidden select-none">/{section}</div>
          </div>

          <div className="flex flex-row-reverse items-center">
            <Link
              href="/me"
              className="group peer flex-row items-center cursor-pointer hidden sm:flex"
            >
              <div className="relative h-[24px] w-[40px]"></div>
            </Link>
            <div
              className={`hidden md:block ml-1 text-lg select-none font-medium opacity-0 ${opacityTransitionStyle} ${
                isMe ? "opacity-100" : "opacity-0 peer-hover:opacity-100"
              }`}
            >
              me
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Titlebar

"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

import { Sections } from "@/app/types"
import { logout } from "@/app/(admin)/actions"

const Titlebar = () => {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean) || []
  const section = segments[0]
  const isAdmin = section === Sections.ADMIN

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
          {isAdmin && (
            <form
              action={logout}
              className="flex flex-1 flex-row-reverse items-center"
            >
              <button
                type="submit"
                className="w-full max-w-[100px] self-end rounded-sm py-1 px-2 bg-gray-800 text-white font-bold"
              >
                Logout
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  )
}
export default Titlebar

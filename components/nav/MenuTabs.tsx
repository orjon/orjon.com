import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
// import CurrentTime from '../CurrentTime'
import { menuItems } from '@/app/constants'


const tabStyle =
  'relative group flex flex-row gap-2 items-center p-1 bg-menuTab rounded-tl-[6px] rounded-tr-[20px] duration-100 ease-out transition-[margin]'


const MenuTabs = () => {
  const pathname = usePathname()

  const menu = menuItems
    .filter((menuItem) => !menuItem.titleBar)
    .map((menuItem) => (

      <Link
        key={menuItem.name}
        href={menuItem.href}
        className={`${tabStyle} w-90 px-2 border ${pathname === menuItem.href ? 'border-b-menuTab' : 'border-grey200 border-b-black'
          } `}
      >
        <Image
          src={
            pathname === menuItem.href ? menuItem.iconOn : menuItem.iconOff
          }
          alt={menuItem.name}
          width={30}
          height={30}
        />
        {menuItem.name}
      </Link>

    ))

  return (


    <div className="menu hidden overflow-x-hidden md:grid w-full items-center text-lg font-medium text-menuText" style={{ gridTemplateColumns: 'minmax(0, 1fr) minmax(auto, 1600px) minmax(0, 1fr)' }}>

      <div className={`filler w-full`}>
      </div>

      <div className=" flex justify-center items-center">
        {menu}
        <div className={'filler w-full p-1 border-b border-menuButtonDark h-[38px]'}>&nbsp;</div>
      </div>


      <div className={`filler w-full`}>
      </div>

    </div>


  )
}
export default MenuTabs


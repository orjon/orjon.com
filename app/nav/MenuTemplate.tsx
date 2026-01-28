import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
// import CurrentTime from '../CurrentTime'
import { menuItems } from '@/app/constants'

const buttonBaseStyle =
  'relative group bg-[linear-gradient(to_bottom,var(--titleBar)_50%,var(--menuButtonDark)_50%)] shadow-[inset_0px_-1px_2px_0px_var(--menuShadow)]'
const buttonStyle =
  'block flex flex-row gap-2 items-center p-1 bg-menuButton rounded-[4px] duration-100 ease-out transition-[margin] shadow-[inset_0px_-1px_2px_0px_var(--menuButtonDark)]'

const MenuTempalate = () => {
  const pathname = usePathname()

  const menu = menuItems
    .filter((menuItem) => !menuItem.titleBar)
    .map((menuItem) => (
      <div key={menuItem.name} className={`${buttonBaseStyle} w-90`}>
        <div className='absolute z-0 bg-titleBar w-full h-1/2'></div>
        <Link
          href={menuItem.href}
          className={`relative z-10 ${buttonStyle} px-2 ${pathname === menuItem.href ? `mb-0 mt-1` : 'mb-2 mt-0'
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
      </div>
    ))

  return (


    <div className="menu hidden h-[10px] overflow-x-hidden md:grid w-full items-center text-lg font-medium text-menuText" style={{ gridTemplateColumns: 'minmax(0, 1fr) minmax(auto, 1600px) minmax(0, 1fr)' }}>
      <div className="a bg-red-500 h-full">

      </div>
      <div className="bg-blue-500 h-full flex justify-center items-center">
      </div>

      <div className="c bg-green-500 h-full"></div>
    </div>


  )
}
export default MenuTempalate

{/* <div className={`${buttonBaseStyle} w-full`}>
        <div className='absolute z-0 bg-titleBar w-full h-1/2'></div>
        <div
          className={`relative z-10 ${buttonStyle} w-[8px] rounded-l-none px-0`}
        >
          &nbsp;
        </div>
      </div>

      <div className='buttons content-1600 w-full flex b-red'>
        {menu}
        <div className={`filler flex-1 ${buttonBaseStyle} w-full`}>
          <div className='absolute flex z-0 bg-titleBar w-full h-1/2'></div>
          <div className={`relative flex z-10 ${buttonStyle} rounded-r-none`}>
            &nbsp;
          </div>
        </div>

      </div>

      <div className={`${buttonBaseStyle} w-full`}>
        <div className='absolute z-0 bg-titleBar w-full h-1/2'></div>
        <div className={`relative z-10 ${buttonStyle} rounded-r-none`}>
          &nbsp;
        </div>
      </div> */}

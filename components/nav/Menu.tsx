import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Menu = () => {
  const pathname = usePathname()
  return (
    <div className='hidden md:flex flex-row bg-grey300 text-grey050 text-lg font-medium'>
      <div className='group w-40 splitGrey duration-100'>
        <Link
          href='/code'
          className={`block w-full p-1 bg-grey300 mb-2 group-hover:mb-0 group-hover:mt-1 duration-100 ${
            pathname === '/code' ? 'text-code' : 'text-grey050'
          } shadow-[inset_0px_0px_1px_0px_var(--color-grey400)]`}
        >
          code
        </Link>
      </div>

      <div className='group w-40 splitGrey  duration-100'>
        <Link
          href='/design'
          className={`block w-full p-1 bg-grey300 mb-2 group-hover:mb-0 group-hover:mt-1 duration-100 ${
            pathname === '/design' ? 'text-design' : 'text-grey050'
          } shadow-[inset_0px_0px_1px_0px_var(--color-grey400)]`}
        >
          design
        </Link>
      </div>

      <div className='group w-40 splitGrey duration-100'>
        <Link
          href='/electronics'
          className={`block w-full p-1 bg-grey300 mb-2 group-hover:mb-0 group-hover:mt-1 duration-100 ${
            pathname === '/electronics' ? 'text-electronics' : 'text-grey050'
          } shadow-[inset_0px_0px_1px_0px_var(--color-grey400)]`}
        >
          electronics
        </Link>
      </div>
      <div className='group w-full splitGrey  duration-100'>
        <div className='block w-full p-1 bg-grey300 mb-2 text-grey300'>
          nothing to see here...
        </div>
      </div>
    </div>
  )
}
export default Menu

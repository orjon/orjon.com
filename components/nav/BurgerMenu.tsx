import Link from 'next/link'

const BurgerMenu = ({
  burgerMenu
}: {
  burgerMenu: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }
}) => {
  return (
    <div
      className={`absolute left-0 right-0 top-full z-40 md:hidden text-lg font-bold origin-top transform transition-transform duration-500 px-2 flex flex-col text-center gap-4 bg-grey100 ${
        burgerMenu.isOpen ? 'scale-y-100' : 'scale-y-0'
      }`}
    >
      <Link
        href='/code'
        className={`transition-opacity duration-300 ${
          burgerMenu.isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1>code</h1>
      </Link>
      <Link
        href='/design'
        className={`transition-opacity duration-300 ${
          burgerMenu.isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1>design</h1>
      </Link>
      <Link
        href='/visualization'
        className={`transition-opacity duration-300 ${
          burgerMenu.isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1>visualization</h1>
      </Link>
      <Link
        href='/me'
        className={`transition-opacity duration-300 ${
          burgerMenu.isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1>me</h1>
      </Link>
    </div>
  )
}
export default BurgerMenu

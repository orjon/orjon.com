import Link from 'next/link'

const BurgerMenu = () => {
  return (
    <div className='md:hidden px-2 flex flex-col text-center gap-4 bg-slate-600'>
      <Link href='/code'>
        <h1 className='text-lg font-bold'>code</h1>
      </Link>
      <Link href='/design'>
        <h1 className='text-lg font-bold'>design</h1>
      </Link>
      <Link href='/visualization'>
        <h1 className='text-lg font-bold'>visualization</h1>
      </Link>
    </div>
  )
}
export default BurgerMenu

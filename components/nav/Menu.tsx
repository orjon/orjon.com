import Link from 'next/link'

const Menu = () => {
  return (
    <div className='hidden md:flex px-2  flex-row gap-4 bg-grey100'>
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
export default Menu

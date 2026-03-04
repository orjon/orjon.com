import Link from 'next/link'

import { ButtonType, buttonTypes } from '@/app/types'

const createLink = (type: ButtonType, href: string) => {
  const { style, icon, label } = buttonTypes[type]
  return (
    <Link
      key={type}
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={style}>
      {icon}{label}
    </Link>
  )
}


// const PreviewLinks = ({ href, column, responsive = false }: { href: string, column: boolean, responsive: boolean }) => {

//   // Enable once mobile oreview is ready
//   const links = [
//     { type: ButtonType.DESKTOP, href }
//   ]
//   responsive && links.push({ type: ButtonType.MOBILE, href })

//   return (
//     <div className={`PreviewLinks w-full flex items-center gap-3 ${column ? 'flex-col' : 'flex-row'}`}>
//       {links.map(({ type, href }) => createLink(type, href))}
//     </div>
//   )
// }

const LinkButton = ({ type, href }: { type: ButtonType; href: string }) => {
  return (
    <div className="LinkButton w-full flex items-center">
      {createLink(type, href)}
    </div>
  )
}


export { LinkButton }

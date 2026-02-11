import { Technology, Scopes, Software } from '@/app/types'

const Pills = ({ data, responsive = false }: { data: Technology[] | Scopes[] | Software[], responsive?: boolean }) => {

  const Pills = data.sort((a, b) => a.localeCompare(b)).map(item => {
    return (
      <li
        key={item}
        className={`text-white font-medium bg-menuButton rounded-sm px-2 py-px text-sm ${responsive && 'sm:text-base'}`}>
        {item}
      </li>
    )
  })

  return (
    <ul className={`flex flex-wrap text-[12px] gap-1 ${responsive && 'sm:gap-2'}`}>{Pills}</ul>
  )
}

export default Pills

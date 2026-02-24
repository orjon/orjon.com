import { Technology, Scopes, Software } from '@/app/types'

const Pills = ({ data, color = 'menuButton', responsive = false }: { data: Technology[] | Scopes[] | Software[], color: string, responsive?: boolean }) => {

  const backgroundColor = `bg-${color}`

  const Pills = data.sort((a, b) => a.localeCompare(b)).map(item => {
    return (
      <li
        key={item}
        className={`text-white font-medium ${backgroundColor} rounded-sm px-2 py-px text-sm ${responsive && 'sm:text-base'}`}>
        {item}
      </li>
    )
  })

  return (
    <ul className={`flex flex-wrap text-[12px] gap-1 ${responsive && 'sm:gap-2'}`}>{Pills}</ul>
  )
}

export default Pills

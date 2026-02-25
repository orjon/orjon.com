import { Technology, Scopes, Software, ProjectType } from '@/app/types'

const Pills = ({ data, color = ProjectType.CODE, responsive = false }: { data: Technology[] | Scopes[] | Software[], color?: ProjectType, responsive?: boolean }) => {

  // const backgroundColor = color === ProjectType.DESIGN ? 'bg-[#6adbe9]' : 'bg-[#ea3ff7]'
  const backgroundColor = color === ProjectType.DESIGN ? 'bg-[#00b8e6]' : 'bg-[#ea3ff7]'

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

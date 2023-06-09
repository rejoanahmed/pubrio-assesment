import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import Link from 'next/link'
import { useRouter } from 'next/router'

export type NavItemProps = {
  text?: string
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string
  }
  link: string
  activeWhile?: string[]
  topNav?: boolean
}
const NavItem = ({ text, Icon, link, activeWhile, topNav }: NavItemProps) => {
  const { pathname } = useRouter()
  const isActive = activeWhile?.includes(pathname) || pathname.includes(link)
  const IsTopNav = topNav ?? false
  return (
    <Link href={link}>
      <div
        className={`group flex items-center justify-center px-4 h-full hover:bg-gray-100 hover:text-blue-300 ${
          !IsTopNav ? 'hover:border-blue-500' : 'hover:border-inherit'
        } hover:border-b ${isActive && 'border-b bg-gray-100 text-blue-300'} ${
          !IsTopNav && isActive && 'border-blue-500'
        }`}
      >
        <Icon sx={{ width: 20, height: 20 }} />

        <h1
          className={`ml-1 align-middle text-sm flex items-center h-full group-hover:text-blue-300 ${
            isActive && 'bg-gray-100'
          } ${isActive ? 'text-blue-300' : 'text-gray-500'}`}
        >
          {text}
        </h1>
      </div>
    </Link>
  )
}

export default NavItem

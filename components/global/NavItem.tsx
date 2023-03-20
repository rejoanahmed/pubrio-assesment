import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import Link from 'next/link'

export type NavItemProps = {
  text?: string
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string
  }
  link: string
}
const NavItem = ({ text, Icon, link }: NavItemProps) => {
  return (
    <div className='flex items-center justify-center p-4 hover:bg-gray-100'>
      <Icon sx={{ width: 20, height: 20 }} />
      <Link href={link}>
        <h1 className='ml-1 text-gray-600 text-sm'>{text}</h1>
      </Link>
    </div>
  )
}

export default NavItem

import React from 'react'
import NavItem, { NavItemProps } from '../global/NavItem'
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined'
import AvTimerOutlinedIcon from '@mui/icons-material/AvTimerOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined'
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined'
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined'
type Props = {
  children: React.ReactNode
  navItems: NavItemProps[]
}
export const HomeNavItems: NavItemProps[] = [
  {
    text: 'Onboarding',
    link: '/onboarding',
    Icon: AppsOutlinedIcon
  },
  {
    text: 'Cockpit',
    link: '/cockpit',
    Icon: AvTimerOutlinedIcon
  }
]
export const SearchNavItems: NavItemProps[] = [
  {
    text: 'People',
    link: '/people',
    Icon: PeopleAltOutlinedIcon
  },
  {
    text: 'Companies',
    link: '/companies',
    Icon: ApartmentOutlinedIcon
  },
  {
    text: 'Lists',
    link: '/lists',
    Icon: ListAltOutlinedIcon
  },
  {
    text: 'Saved Searches',
    link: '/savedsearches',
    Icon: TaskAltOutlinedIcon
  }
]
const SecondaryLayout = ({ children, navItems }: Props) => {
  return (
    <>
      <nav className='flex sticky z-50 top-12 bg-gray-100 border-b h-10'>
        {navItems.map((item, index) => {
          return <NavItem key={index} {...item} />
        })}
      </nav>
      <main>{children}</main>
    </>
  )
}

export default SecondaryLayout

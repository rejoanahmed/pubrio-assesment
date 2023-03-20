import Link from 'next/link'
import React from 'react'
import NavItem, { NavItemProps } from '../global/NavItem'
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined'
import AvTimerOutlinedIcon from '@mui/icons-material/AvTimerOutlined'
type Props = {
  children: React.ReactNode
}
const navItems: NavItemProps[] = [
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
const HomeLayout = ({ children }: Props) => {
  return (
    <>
      <nav className='flex bg-slate-100'>
        {navItems.map((item, index) => {
          return <NavItem key={index} {...item} />
        })}
      </nav>
      <main>{children}</main>
    </>
  )
}

export default HomeLayout

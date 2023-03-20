import { FC, ReactNode } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button, SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import Image from 'next/image'
import TopSearchInput from '../TopSearchInput.tsx'
import NavItem, { NavItemProps } from '../global/NavItem'
import { HomeNavItems, SearchNavItems } from './Secondary'

const navItems: NavItemProps[] = [
  {
    text: 'Home',
    Icon: HomeOutlinedIcon,
    link: '/onboarding',
    activeWhile: HomeNavItems.map((item) => item.link),
    topNav: true
  },
  {
    text: 'Search',
    Icon: SearchIcon,
    link: '/people',
    activeWhile: SearchNavItems.map((item) => item.link),
    topNav: true
  },
  {
    text: 'Engage',
    Icon: SendOutlinedIcon,
    link: '/engage',
    topNav: true
  },
  {
    text: 'Enrich',
    Icon: SyncOutlinedIcon,
    link: '/enrich',
    topNav: true
  }
]
type Props = {
  children?: ReactNode
}
const PrimaryLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className='flex justify-between border-b h-16'>
        <div className='flex'>
          <Image
            className='p-3'
            width={50}
            height={50}
            src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjYwMDUgNS42NzMzM0gxNS41MzYxTDE3LjEyNTEgOC4zOTY4MkwxOC42MDA1IDUuNjczMzNaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjIuODU5MyAyMS4wNDdMMTEuOTgxMSAyLjk0OTg0TDEuMTM5MTkgMjEuMDA5MUg2Ljk0NTkzQzcuNzIwNjkgMjEuMDA5MSA4LjQ4MjgzIDIwLjgxMzUgOS4xNTY2IDIwLjQ0MjdDOS44ODQwMiAyMC4wNDE5IDEwLjQzMzEgMTkuNDYxMiAxMC44NjIzIDE4Ljc1NzRDMTEuMzY0MSAxNy45MzM4IDExLjg1MTcgMTcuMTAwNiAxMi4zNDU2IDE2LjI3MjJMMTMuNjA5NSAxNC4xNTE1TDExLjk3OTUgMTEuNDIwMUwxMS4yNTY4IDEyLjU4M0MxMC40MzMxIDEzLjk2MDYgOS42NTM2NCAxNS4zNjk2IDguNzk5OTkgMTYuNzI4MkM4LjM3MDggMTcuNDA5OSA3LjgxMDYzIDE4LjA1MzcgNi45ODM4IDE4LjIxOTRDNi44NTkxNSAxOC4yNDQ2IDYuNzMxMzQgMTguMjU3MiA2LjYwMzUzIDE4LjI2MkM2LjQzMzExIDE4LjI2ODMgNi4yNjI3IDE4LjI2NTEgNi4wOTM4NiAxOC4yNjUxTDExLjk4MTEgOC4yMzkwM0wxOS41NDA5IDIxLjA0N0gyMi44NTkzWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=='
            alt='brand'
          />

          {navItems.map((item, index) => {
            return <NavItem key={index} {...item} />
          })}
        </div>
        <div className='flex items-center'>
          <div className='flex bg-blue-500 rounded h-10'>
            <Button variant='contained'>Upgrade</Button>
          </div>
          <TopSearchInput />
        </div>
      </div>
      {children}
    </>
  )
}

export default PrimaryLayout

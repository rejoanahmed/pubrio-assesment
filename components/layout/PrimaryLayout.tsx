// react
import { FC, ReactNode, useState } from 'react'

//hooks
import useAuth from '../../hooks/useAuth'

// Icons
import SearchIcon from '@mui/icons-material/Search'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined'
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded'
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded'
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import { PersonAdd, Settings, Logout } from '@mui/icons-material'
import LoginIcon from '@mui/icons-material/Login'

// Next imports
import Image from 'next/image'
import Link from 'next/link'
import { signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

// Components
import TopSearchInput from '../TopSearchInput.tsx'
import NavItem, { NavItemProps } from '../global/NavItem'
import { HomeNavItems, SearchNavItems } from './Secondary'
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip
} from '@mui/material'

// Utils
import { stringAvatar } from '../../utils/AvatarComponent'

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
  const data = useAuth()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const router = useRouter()

  return (
    <>
      <div className='flex sticky top-0 bg-white z-30 justify-between border-b h-12'>
        <div className='flex'>
          <Image
            className='p-2'
            width={50}
            height={50}
            src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjYwMDUgNS42NzMzM0gxNS41MzYxTDE3LjEyNTEgOC4zOTY4MkwxOC42MDA1IDUuNjczMzNaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjIuODU5MyAyMS4wNDdMMTEuOTgxMSAyLjk0OTg0TDEuMTM5MTkgMjEuMDA5MUg2Ljk0NTkzQzcuNzIwNjkgMjEuMDA5MSA4LjQ4MjgzIDIwLjgxMzUgOS4xNTY2IDIwLjQ0MjdDOS44ODQwMiAyMC4wNDE5IDEwLjQzMzEgMTkuNDYxMiAxMC44NjIzIDE4Ljc1NzRDMTEuMzY0MSAxNy45MzM4IDExLjg1MTcgMTcuMTAwNiAxMi4zNDU2IDE2LjI3MjJMMTMuNjA5NSAxNC4xNTE1TDExLjk3OTUgMTEuNDIwMUwxMS4yNTY4IDEyLjU4M0MxMC40MzMxIDEzLjk2MDYgOS42NTM2NCAxNS4zNjk2IDguNzk5OTkgMTYuNzI4MkM4LjM3MDggMTcuNDA5OSA3LjgxMDYzIDE4LjA1MzcgNi45ODM4IDE4LjIxOTRDNi44NTkxNSAxOC4yNDQ2IDYuNzMxMzQgMTguMjU3MiA2LjYwMzUzIDE4LjI2MkM2LjQzMzExIDE4LjI2ODMgNi4yNjI3IDE4LjI2NTEgNi4wOTM4NiAxOC4yNjUxTDExLjk4MTEgOC4yMzkwM0wxOS41NDA5IDIxLjA0N0gyMi44NTkzWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=='
            alt='brand'
          />

          {navItems.map((item, index) => {
            return <NavItem key={index} {...item} />
          })}
        </div>
        <div className='flex gap-4 items-center mr-2'>
          <button className='flex bg-blue-400 hover:bg-blue-500 rounded px-5 py-1 text-white'>
            Upgrade
          </button>
          <TopSearchInput />

          <Link href='#' className='text-gray-500 hover:text-blue-400 '>
            <LocalPhoneRoundedIcon sx={{ width: 20, height: 20 }} />
          </Link>
          <Link href='#' className='text-gray-500 hover:text-blue-400 '>
            <HelpOutlineRoundedIcon sx={{ width: 20, height: 20 }} />
          </Link>
          <Link href='#' className='text-gray-500 hover:text-blue-400 '>
            <NotificationsRoundedIcon sx={{ width: 20, height: 20 }} />
          </Link>
          <Link href='#' className='text-gray-500 hover:text-blue-400 '>
            <Tooltip title='Settings' arrow>
              <SettingsRoundedIcon sx={{ width: 20, height: 20 }} />
            </Tooltip>
          </Link>
          <IconButton
            sx={{ padding: 0 }}
            onClick={
              data ? handleClick : () => router.replace('/api/auth/signin')
            }
          >
            {data ? (
              <Avatar
                {...stringAvatar(data?.user?.name ?? 'Guest User')}
                sx={{ width: 28, height: 28, fontSize: 12 }}
                style={{ backgroundColor: open ? '#33346f' : '#a0a0a0' }}
              />
            ) : (
              <Avatar sx={{ width: 28, height: 28 }}>
                <LoginIcon />
              </Avatar>
            )}
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            id='account-menu'
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 3,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1
                }
              }
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <PersonAdd fontSize='small' />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize='small' />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={() => signOut()}>
              <ListItemIcon>
                <Logout fontSize='small' />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </div>
      {children}
    </>
  )
}

export default PrimaryLayout

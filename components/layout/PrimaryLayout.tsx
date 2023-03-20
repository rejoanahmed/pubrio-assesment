import { FC, ReactNode, useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Autocomplete, Button, SvgIconTypeMap, TextField } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import Image from 'next/image'
import TopSearchInput from '../TopSearchInput.tsx'
const navItems: LeftNavItemProps[] = [
  {
    text: 'Home',
    Icon: HomeOutlinedIcon,
    link: '/onboarding'
  },
  {
    text: 'Search',
    Icon: SearchIcon,
    link: '/search'
  },
  {
    text: 'Engage',
    Icon: SendOutlinedIcon,
    link: '/engage'
  },
  {
    text: 'Enrich',
    Icon: SyncOutlinedIcon,
    link: '/enrich'
  }
]
type Props = {
  children?: ReactNode
}
const PrimaryLayout: FC<Props> = ({ children }) => {
  const [searchFocused, setSearchFocused] = useState(false)
  const [inputWidth, setInputWidth] = useState(400)
  useEffect(() => {
    if (searchFocused) {
      setInputWidth(400)
    } else {
      setInputWidth(300)
    }

    return () => {
      setInputWidth(400)
    }
  }, [searchFocused])

  return (
    <>
      <div className='flex justify-between border-b-[1px]'>
        <div className='flex'>
          <Image
            className='p-3'
            width={50}
            height={50}
            src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjYwMDUgNS42NzMzM0gxNS41MzYxTDE3LjEyNTEgOC4zOTY4MkwxOC42MDA1IDUuNjczMzNaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjIuODU5MyAyMS4wNDdMMTEuOTgxMSAyLjk0OTg0TDEuMTM5MTkgMjEuMDA5MUg2Ljk0NTkzQzcuNzIwNjkgMjEuMDA5MSA4LjQ4MjgzIDIwLjgxMzUgOS4xNTY2IDIwLjQ0MjdDOS44ODQwMiAyMC4wNDE5IDEwLjQzMzEgMTkuNDYxMiAxMC44NjIzIDE4Ljc1NzRDMTEuMzY0MSAxNy45MzM4IDExLjg1MTcgMTcuMTAwNiAxMi4zNDU2IDE2LjI3MjJMMTMuNjA5NSAxNC4xNTE1TDExLjk3OTUgMTEuNDIwMUwxMS4yNTY4IDEyLjU4M0MxMC40MzMxIDEzLjk2MDYgOS42NTM2NCAxNS4zNjk2IDguNzk5OTkgMTYuNzI4MkM4LjM3MDggMTcuNDA5OSA3LjgxMDYzIDE4LjA1MzcgNi45ODM4IDE4LjIxOTRDNi44NTkxNSAxOC4yNDQ2IDYuNzMxMzQgMTguMjU3MiA2LjYwMzUzIDE4LjI2MkM2LjQzMzExIDE4LjI2ODMgNi4yNjI3IDE4LjI2NTEgNi4wOTM4NiAxOC4yNjUxTDExLjk4MTEgOC4yMzkwM0wxOS41NDA5IDIxLjA0N0gyMi44NTkzWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=='
            alt='brand'
          />

          {navItems.map((item, index) => {
            return <LeftNavItem key={index} {...item} />
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

type LeftNavItemProps = {
  text?: string
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string
  }
  link: string
}
const LeftNavItem = ({ text, Icon, link }: LeftNavItemProps) => {
  const { route } = useRouter()
  const isActive = route === link
  return (
    <div className='flex items-center justify-center p-4 hover:bg-gray-100'>
      <Icon sx={{ width: 20, height: 20 }} />
      <Link href={link}>
        <div className='ml-1 text-gray-600 text-sm'>{text}</div>
      </Link>
    </div>
  )
}

export default PrimaryLayout

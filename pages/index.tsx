import { Button } from '@mui/material'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import HomeLayout from '../components/layout/HomeLayout'
import PrimaryLayout from '../components/layout/PrimaryLayout'
import { NextPageWithLayout } from './_app'

const Index: NextPageWithLayout = () => {
  const router = useRouter()
  useEffect(() => {
    router.replace('/onboarding')
  }, [])
  return <div></div>
}

export default Index

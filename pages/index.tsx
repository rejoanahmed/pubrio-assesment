import { Button } from '@mui/material'
import { useSession, signIn, signOut } from 'next-auth/react'
import PrimaryLayout from '../components/layout/PrimaryLayout'
import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return <div>hello</div>
}

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}

export default Home

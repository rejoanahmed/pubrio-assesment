import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { NextPageWithLayout } from './_app'

const Index: NextPageWithLayout = () => {
  const router = useRouter()
  useEffect(() => {
    router.replace('/onboarding')
  }, [])
  return <div></div>
}

export default Index

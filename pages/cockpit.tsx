import HomeLayout from '../components/layout/HomeLayout'
import PrimaryLayout from '../components/layout/PrimaryLayout'
import { NextPageWithLayout } from './_app'

const cockpit: NextPageWithLayout = () => {
  return <div>cockpit</div>
}

cockpit.getLayout = (page) => (
  <PrimaryLayout>
    <HomeLayout>{page}</HomeLayout>
  </PrimaryLayout>
)

export default cockpit

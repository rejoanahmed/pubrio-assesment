import HomeLayout from '../components/layout/Secondary'
import PrimaryLayout from '../components/layout/PrimaryLayout'
import { NextPageWithLayout } from './_app'

const Onboarding: NextPageWithLayout = () => {
  return <div>onboarding</div>
}
Onboarding.getLayout = (page) => (
  <PrimaryLayout>
    <HomeLayout>{page}</HomeLayout>
  </PrimaryLayout>
)

export default Onboarding

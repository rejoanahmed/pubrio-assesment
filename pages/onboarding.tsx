import SecondaryLayout, { HomeNavItems } from '../components/layout/Secondary'
import PrimaryLayout from '../components/layout/PrimaryLayout'
import { NextPageWithLayout } from './_app'

const Onboarding: NextPageWithLayout = () => {
  return <div>onboarding</div>
}
Onboarding.getLayout = (page) => (
  <PrimaryLayout>
    <SecondaryLayout navItems={HomeNavItems}>{page}</SecondaryLayout>
  </PrimaryLayout>
)

export default Onboarding

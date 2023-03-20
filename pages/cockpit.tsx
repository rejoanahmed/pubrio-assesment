import SecondaryLayout, { HomeNavItems } from '../components/layout/Secondary'
import PrimaryLayout from '../components/layout/PrimaryLayout'
import { NextPageWithLayout } from './_app'

const cockpit: NextPageWithLayout = () => {
  return <div>cockpit</div>
}

cockpit.getLayout = (page) => (
  <PrimaryLayout>
    <SecondaryLayout navItems={HomeNavItems}>{page}</SecondaryLayout>
  </PrimaryLayout>
)

export default cockpit

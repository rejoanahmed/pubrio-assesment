import PrimaryLayout from '../components/layout/PrimaryLayout'
import SecondaryLayout, { SearchNavItems } from '../components/layout/Secondary'
import { NextPageWithLayout } from './_app'

const Lists: NextPageWithLayout = () => {
  return <div>Lists</div>
}

Lists.getLayout = (page) => (
  <PrimaryLayout>
    <SecondaryLayout navItems={SearchNavItems}>{page}</SecondaryLayout>
  </PrimaryLayout>
)

export default Lists

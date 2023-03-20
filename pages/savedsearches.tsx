import PrimaryLayout from '../components/layout/PrimaryLayout'
import SecondaryLayout, { SearchNavItems } from '../components/layout/Secondary'
import { NextPageWithLayout } from './_app'

const SavedSearches: NextPageWithLayout = () => {
  return <div>SavedSearches</div>
}

SavedSearches.getLayout = (page) => (
  <PrimaryLayout>
    <SecondaryLayout navItems={SearchNavItems}>{page}</SecondaryLayout>
  </PrimaryLayout>
)

export default SavedSearches

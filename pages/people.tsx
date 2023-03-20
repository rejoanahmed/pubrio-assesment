import React from 'react'
import PrimaryLayout from '../components/layout/PrimaryLayout'
import SecondaryLayout, { SearchNavItems } from '../components/layout/Secondary'
import { NextPageWithLayout } from './_app'

const People: NextPageWithLayout = () => {
  return <div>People</div>
}
People.getLayout = (page) => (
  <PrimaryLayout>
    <SecondaryLayout navItems={SearchNavItems}>{page}</SecondaryLayout>
  </PrimaryLayout>
)
export default People

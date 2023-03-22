import React from 'react'
import { PeopleItemProps } from '../../../TopSearchInput.tsx/PeopleItem'
import NameColumn from './NameColumn'
import QuickAction from './QuickAction'

function TableRow({ rowData }: { rowData: PeopleItemProps }) {
  const visibleColumns = []
  console.log('bro')
  return (
    <tr className='relative py-3'>
      <NameColumn name={rowData.name} />
      <QuickAction />
      <QuickAction />
      <QuickAction />
      <QuickAction />
      <QuickAction />
      <QuickAction />
      <QuickAction />
      <QuickAction />
    </tr>
  )
}

export default TableRow

import React from 'react'
import { visibleColumns } from '../../../../fakeData/datatable'
import PeopleNameColumn from './NameColumn'
import PeopleQuickAction from './QuickAction'

function TableHead() {
  return (
    <thead>
      <tr className='relative'>
        <PeopleNameColumn header />
        <PeopleQuickAction header /> <PeopleQuickAction header />
        <PeopleQuickAction header /> <PeopleQuickAction header />
        <PeopleQuickAction header /> <PeopleQuickAction header />
        <PeopleQuickAction header /> <PeopleQuickAction header />
        <PeopleQuickAction header /> <PeopleQuickAction header />
        <PeopleQuickAction header /> <PeopleQuickAction header />
        <PeopleQuickAction header /> <PeopleQuickAction header />
        <PeopleQuickAction header /> <PeopleQuickAction header />
        <PeopleQuickAction header /> <PeopleQuickAction header />
        <PeopleQuickAction header /> <PeopleQuickAction header />
        <PeopleQuickAction header /> <PeopleQuickAction header />
        <PeopleQuickAction header /> <PeopleQuickAction header />
        <PeopleQuickAction header /> <PeopleQuickAction header />
        <PeopleQuickAction header /> <PeopleQuickAction header />
        <PeopleQuickAction header /> <PeopleQuickAction header />
        <PeopleQuickAction header /> <PeopleQuickAction header />
        <PeopleQuickAction header /> <PeopleQuickAction header />
        <PeopleQuickAction header /> <PeopleQuickAction header />
        <PeopleQuickAction header /> <PeopleQuickAction header />
        <PeopleQuickAction header /> <PeopleQuickAction header />
      </tr>
    </thead>
  )
}

export default TableHead

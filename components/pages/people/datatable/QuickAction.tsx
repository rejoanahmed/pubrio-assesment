function PeopleQuickAction({ header }: { header?: boolean }) {
  if (!header) {
    return <td className='relative'>quick Actions</td>
  } else {
    return (
      <th className='sticky z-10 top-0 bg-white'>
        <h1>Quick Actions</h1>
      </th>
    )
  }
}

export default PeopleQuickAction

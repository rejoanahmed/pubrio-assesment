import LinkedInIcon from '@mui/icons-material/LinkedIn'

function PeopleNameColumn({
  name,
  header
}: {
  name?: string
  header?: boolean
  headerProps?: any
}) {
  if (!header) {
    return (
      <td className='sticky flex z-10 left-0 bg-white border-r-4'>
        <h1>{name}</h1>
        <LinkedInIcon />
      </td>
    )
  } else {
    return (
      <th className='sticky border-r-4 z-20 bg-white  top-0 left-0'>
        <h1>Name</h1>
      </th>
    )
  }
}

export default PeopleNameColumn

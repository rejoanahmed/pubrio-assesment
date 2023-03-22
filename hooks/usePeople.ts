// SWR
import useSWR from 'swr'
import { PeopleItemProps } from '../components/TopSearchInput.tsx/PeopleItem'

// Utils
import { fetcher } from '../utils/apiCalls'
import { randomJObTitle } from '../utils/randomJob'

const usePeople = () => {
  const { data } = useSWR<{
    results: {
      picture: { thumbnail: string }
      location: { country: string }
      name: { first: string; last: string }
      gender: string
    }[]
  }>(
    'https://randomuser.me/api/?results=5000&inc=gender,name,nat,picture,location',
    fetcher,
    {
      dedupingInterval: 1000 * 60 * 60 * 24
    }
  )

  return data?.results.map((item) => {
    return {
      avatar: item.picture.thumbnail,
      company: item.location.country,
      jobTitle: randomJObTitle(),
      name: `${item.name.first} ${item.name.last}`,
      gender: item.gender
    }
  })
}

export default usePeople

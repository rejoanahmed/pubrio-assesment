import SearchIcon from '@mui/icons-material/Search'
import { Divider } from '@mui/material'
import { useDeferredValue, useEffect, useState } from 'react'
import useSWR from 'swr'
import { fetcher } from '../../utils/apiCalls'
import InputSearchFilter from './InputSearchFilter'
import PeopleItem, { PeopleItemProps } from './PeopleItem'

const TopSearchInput = () => {
  const [searchActive, setSearchActive] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const query = useDeferredValue(inputValue)
  const { data } = useSWR(
    'https://randomuser.me/api/?results=5000&inc=gender,name,nat,picture,location',
    fetcher,
    {
      dedupingInterval: 1000 * 60 * 60 * 24
    }
  )
  const [people, setPeople] = useState<PeopleItemProps[]>([])
  const [recentSearch, setRecentSearch] = useState<PeopleItemProps[]>([
    {
      avatar: 'ZA',
      company: 'Waymark',
      gender: 'Male',
      jobTitle: 'Software Engineer',
      name: 'Zach Ceneviva'
    },
    {
      avatar: 'RA',
      company: 'Waymark',
      gender: 'Male',
      jobTitle: 'Software Engineer',
      name: 'Rahul Ceneviva'
    },
    {
      avatar: 'SB',
      company: 'Waymark',
      gender: 'Female',
      jobTitle: 'Data Engineer',
      name: 'Sistania Bong'
    }
  ])
  useEffect(() => {
    if (data) {
      const randomJObTitle = () =>
        [
          'Frontend developer',
          'Fullstack developer',
          'Backend developer',
          'Data Engineer',
          'DevOps'
        ][Math.floor(Math.random() * 5)]

      const filteredPeople = data?.results
        .filter((item: any) => {
          const name = `${item.name.first} ${item.name.last}`
          return name.toLowerCase().includes(query.toLowerCase())
        })
        .sort(() => 0.5 - Math.random())
        .slice(0, 8)
        .map((item: any) => {
          return {
            avatar: item.picture.thumbnail,
            company: item.location.country,
            jobTitle: randomJObTitle(),
            name: `${item.name.first} ${item.name.last}`,
            gender: item.gender
          }
        })

      setPeople(filteredPeople)
    }
  }, [query])
  console.log(data?.results, people)
  return (
    <div className='relative'>
      <div
        className={`flex items-center border ${
          searchActive ? 'border-blue-400 ' : ''
        }rounded px-2 py-1`}
        style={{
          width: searchActive ? 700 : 300,
          transition: 'width 0.1s ease-in-out'
        }}
      >
        <div>
          <SearchIcon
            sx={{ color: searchActive ? 'rgb(96 165 250)' : 'rgba(0,0,0,.4)' }}
          />
        </div>
        <input
          className='w-full block outline-none '
          type='text'
          name='topSearch'
          id='topSearch'
          placeholder='Search'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => {
            !searchActive && setSearchActive(true)
          }}
          onBlur={() => {
            !inputValue && setSearchActive(false)
          }}
        />
      </div>
      {searchActive && (
        <div className='py-4 absolute top-10 rounded-sm border shadow-md w-full backdrop-blur'>
          {!inputValue ? (
            <>
              <div className='px-8'>
                <InputSearchFilter />
              </div>
              <Divider className='mt-4' />
              <div className='bg-gray-100 py-2'>
                <h2 className='px-8 font-bold'>Recent People Searches</h2>
                <div>
                  {recentSearch.map((item: any, index: number) => (
                    <PeopleItem key={index} {...item} />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className='bg-gray-100 py-2'>
                <h2 className='px-8 font-bold'>People</h2>
                <div>
                  {people.map((item: any, index: number) => (
                    <PeopleItem key={index} {...item} />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default TopSearchInput

import SearchIcon from '@mui/icons-material/Search'
import { Divider } from '@mui/material'
import { useDeferredValue, useEffect, useState } from 'react'
import useSWR from 'swr'
import useAuth from '../../hooks/useAuth'
import usePeopleStore from '../../store/peopleStore'
import { fetcher } from '../../utils/apiCalls'
import { randomJObTitle } from '../../utils/randomJob'
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
  const populatePeopleStore = usePeopleStore((state) => state.setPeople)
  console.log(usePeopleStore((state) => state.people))
  const [people, setPeople] = useState<PeopleItemProps[]>([])
  const [recentSearch, setRecentSearch] = useState<PeopleItemProps[]>([
    {
      avatar: useAuth()?.user?.image || '',
      company: 'Waymark',
      gender: 'Male',
      jobTitle: 'Full Stack Software Engineer',
      name: 'Rejoan Ahmed'
    },
    {
      avatar: 'ZA',
      company: 'Waymark',
      gender: 'Male',
      jobTitle: 'Software Engineer',
      name: 'Zach Ceneviva'
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
    data &&
      populatePeopleStore(
        data.results.slice(0, 30).map((item: any) => {
          return {
            avatar: item.picture.thumbnail,
            company: item.location.country,
            jobTitle: randomJObTitle(),
            name: `${item.name.first} ${item.name.last}`,
            gender: item.gender
          }
        })
      )
  }, [data])
  useEffect(() => {
    if (data) {
      const filteredPeople = data.results
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

  return (
    <div className='relative z-50'>
      <div
        className={`flex items-center border ${
          searchActive ? 'border-blue-400 ' : ''
        }rounded px-2 py-1`}
        style={{
          width: searchActive ? '40vw' : 250,
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
            setSearchActive(false)
          }}
        />
      </div>
      {searchActive && (
        <div className='py-4 absolute top-10 rounded-sm border shadow-md w-full backdrop-blur z-30'>
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

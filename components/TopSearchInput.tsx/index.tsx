import SearchIcon from '@mui/icons-material/Search'
import { Divider } from '@mui/material'
import { useDeferredValue, useState } from 'react'
import useSWR from 'swr'
import { fetcher } from '../../utils/apiCalls'
import InputSearchFilter from './InputSearchFilter'
import PeopleItem from './PeopleItem'

const TopSearchInput = () => {
  const [searchActive, setSearchActive] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const query = useDeferredValue(inputValue)
  const { data } = useSWR('https://randomuser.me/api/?results=5000', fetcher, {
    dedupingInterval: 1000 * 60 * 60 * 24
  })

  return (
    <div className='relative'>
      <div
        className={`flex items-center border ${
          searchActive ? 'border-blue-400 ' : ''
        }rounded px-2 py-1`}
        style={{
          width: searchActive ? 800 : 300,
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
              <PeopleItem
                avatar='ZA'
                company='Waymark'
                gender='Male'
                jobTitle='Software Engineer'
                name='Zach Ceneviva'
              />
            </>
          ) : (
            <>
              <div></div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default TopSearchInput

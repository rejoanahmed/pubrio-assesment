import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'

const TopSearchInput = () => {
  const [searchActive, setSearchActive] = useState(false)
  const [inputValue, setInputValue] = useState('')
  return (
    <div className='relative'>
      <div
        className={`flex items-center border ${
          searchActive ? 'border-blue-400 ' : ''
        }rounded h-10 p-2`}
        style={{
          width: searchActive ? 500 : 300,
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
        <div className='absolute top-7 rounded-sm border shadow-sm w-full blur-md h-96'>
          {!inputValue ? (
            <>
              <div className='px-4 pt-4 pb-3'></div>
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

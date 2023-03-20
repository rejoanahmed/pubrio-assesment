import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'

const TopSearchInput = () => {
  const [searchFocused, setSearchFocused] = useState(false)
  const [inputValue, setInputValue] = useState('')
  return (
    <div
      className={`flex items-center border ${
        searchFocused ? 'border-blue-400 ' : ''
      }rounded h-10 p-2`}
      style={{
        width: searchFocused ? 500 : 300,
        transition: 'width 0.1s ease-in-out'
      }}
    >
      <div>
        <SearchIcon
          sx={{ color: searchFocused ? 'rgb(96 165 250)' : 'rgba(0,0,0,.4)' }}
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
          !searchFocused && setSearchFocused(true)
        }}
        onBlur={() => {
          !inputValue && setSearchFocused(false)
        }}
      />
    </div>
  )
}

export default TopSearchInput

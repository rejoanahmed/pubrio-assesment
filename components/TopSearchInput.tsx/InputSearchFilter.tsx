import AddIcon from '@mui/icons-material/Add'
const InputSearchFilter = () => {
  return (
    <div>
      <div className='flex w-full h-9'>
        <h1 className='align-middle mr-4 text-slate-600 '>
          Search by popular filters:
        </h1>
        <h4 className='mr-2 align-middle text-slate-600 cursor-pointer h-full hover:text-blue-400 hover:border-b hover:border-blue-600'>
          People
        </h4>
        <h4 className='align-middle h-full text-slate-600 cursor-pointer  hover:text-blue-400 hover:border-b hover:border-blue-600'>
          Companies
        </h4>
      </div>
      <div className='flex flex-wrap mt-2 gap-2'>
        {['Job Title', 'Company', 'Industry'].map((item, index) => (
          <InputSearchTag key={index} title={item} />
        ))}
        <h4 className='flex items-center text-sm text-blue-400 cursor-pointer font-bold'>
          See All 30 filters
        </h4>
      </div>
    </div>
  )
}

function truncateString(str: string, num: number) {
  if (str.length > num) {
    return str.slice(0, num) + '...'
  } else {
    return str
  }
}

export const InputSearchTag = ({ title }: { title: string }) => {
  const string = truncateString(title, 7)
  return (
    <div className='flex items-center justify-center h-8 px-2 text-sm text-slate-600 bg-slate-200 rounded-sm cursor-pointer hover:bg-slate-300'>
      <AddIcon />
      <h4>{string}</h4>
    </div>
  )
}

export default InputSearchFilter

import { SyntheticEvent, useState } from 'react'
import PrimaryLayout from '../components/layout/PrimaryLayout'
import SecondaryLayout, { SearchNavItems } from '../components/layout/Secondary'
import { NextPageWithLayout } from './_app'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, {
  AccordionSummaryProps
} from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import SearchIcon from '@mui/icons-material/Search'

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} {...props} />
))(({ theme }) => ({}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1)
  }
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)'
}))

const People: NextPageWithLayout = () => {
  const [expanded, setExpanded] = useState<number | false>(false)

  const handleChange =
    (panel: number) => (event: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false)
    }

  const [inputValue, setInputValue] = useState('')
  const [searchActive, setSearchActive] = useState(false)

  return (
    <div className='w-96 h-[calc(100vh-90px)] overflow-scroll border-r-2 shadow-2xl relative'>
      <div className='sticky top-0 z-10 px-8 py-4 backdrop-blur-sm shadow-lg'>
        <div
          className={` flex items-center border ${
            searchActive ? 'border-blue-400 ' : ''
          }rounded px-2 justify-center`}
          style={{
            width: 200
          }}
        >
          <SearchIcon
            sx={{ color: searchActive ? 'rgb(96 165 250)' : 'rgba(0,0,0,.4)' }}
          />

          <input
            className='w-full block outline-none h-10 ml-2 bg-transparent'
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
      </div>
      <h1 className='px-8 mt-8 mb-3 font-bold text-lg'>Filters</h1>
      {Array.from(new Array(30)).map((_, index) => (
        <Accordion
          expanded={expanded === index}
          onChange={handleChange(index)}
          sx={{
            border: `2px solid ${expanded === index && 'blue'}`
          }}
        >
          <AccordionSummary
            aria-controls={`panel${index}d-header`}
            id={`panel${index}d-header`}
            disabled={index >= 15}
          >
            <Typography>Collapsible Filter Item #{index}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}
People.getLayout = (page) => (
  <PrimaryLayout>
    <SecondaryLayout navItems={SearchNavItems}>{page}</SecondaryLayout>
  </PrimaryLayout>
)
export default People

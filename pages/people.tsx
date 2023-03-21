import React from 'react'
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

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  }
}))

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
  const [expanded, setExpanded] = React.useState<number | false>(false)

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false)
    }

  return (
    <div className='w-96 h-[calc(100vh-90px)] overflow-scroll'>
      {Array.from(new Array(30)).map((_, index) => (
        <Accordion expanded={expanded === index} onChange={handleChange(index)}>
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

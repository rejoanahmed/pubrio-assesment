import { People } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'

type Props = {
  avatar: string
  name: string
  jobTitle: string
  company: string
  gender: string
}

function PeopleItem({ avatar, company, gender, jobTitle, name }: Props) {
  return (
    <div className='flex py-2 px-8 h-6 items-center'>
      <Avatar src={avatar} />
      <h1 className='ml-2'>{name}</h1>
      <People />
      <h1>{`${jobTitle} @ ${company}`}</h1>
      <h1 className='ml-auto'>{gender}</h1>
    </div>
  )
}

export default PeopleItem

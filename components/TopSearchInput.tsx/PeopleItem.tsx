import { People } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'

export type PeopleItemProps = {
  avatar: string
  name: string
  jobTitle: string
  company: string
  gender: string
}

function PeopleItem({
  avatar,
  company,
  gender,
  jobTitle,
  name
}: PeopleItemProps) {
  return (
    <div className='flex py-2 px-8 h-12 items-center hover:bg-blue-400'>
      <Avatar src={avatar} />
      <h1 className='mx-2'>{name}</h1>
      <People />
      <h1 className='ml-1'>{`${jobTitle} @ ${company}`}</h1>
      <h1 className='ml-auto'>{gender}</h1>
    </div>
  )
}

export default PeopleItem

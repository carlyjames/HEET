import { Divider } from '@mui/material'
import CopyrightIcon from '@mui/icons-material/Copyright';
import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='lg:px-24 px-8 py-16 font-bold lg:text-xl'>
      <Divider className='bg-black' />
      <div className='flex lg:flex-row flex-col items-center justify-around py-8 gap-4'>
        <div>
          <p> <CopyrightIcon /> 2023 Ho Lee $HEET. BUY ME !!!. </p>
          <p>Team Ho Lee $HEET</p>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
import React from 'react'
import { Button, IconButton } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import discord from '../assets/images/discord-3.png'
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className='lg:p-16 p-1 lg:py-16 h-[500px] '>
      <div className='text-3xl flex lg:flex-row flex-col items-center justify-around '>
        <div className='flex '>
        <div className='vertical-rl flex items-center justify-center flex-col'>
            <Link to='/' className='logo ease'>
              <h1>$HEET</h1>
            </Link>
            <Link to='/' className='logo ease'>
              <h1 className='font-semibold text-4xl'>Ho Lee</h1>
            </Link>
          </div>
          <div className='grid grid-cols-2 m-8 gap-4'>
            <Link target='_blank' to='/'>
              <div className='border-solid border-2 border-black  h-[60px] w-[60px] rounded-full flex items-center justify-center'>
                <IconButton >
                  <TelegramIcon fontSize='large' color='black' className='text-black' />
                </IconButton>
              </div>
            </Link>
            <Link target='_blank' to='/'>
              <div className='border-solid border-2 border-black  h-[60px] w-[60px] rounded-full flex items-center justify-center'>
                <IconButton>
                  <TwitterIcon fontSize='large' color='black' className='text-black' />
                </IconButton>
              </div>
            </Link>
            
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='lg:text-5xl text-4xl font-semibold'>" Oh $HEET,<br /> Gas fees are down! "</h1>
          <div   className='text-white contract-btn border p-2 mt-4 rounded-full bg-lawngreen'>
            <p className='text-xs lg:text-lg truncate lg:w-[100%] flex items-center justify-center gap-2 w-[250px]' style={{ fontSize : '16px' }}> <p className='lg:block hidden text-sm'>CONTRACT ADDRESS : </p> 0xb656fe66E9360ce1e1c2Ee84006a37B95c95B8b0</p>
          </div >
        </div>
      </div>
    </section>
  )
}

export default Banner

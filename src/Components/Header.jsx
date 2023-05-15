import React from 'react'
import { Button, IconButton } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import discord from '../assets/images/discord-3.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section className='lg:p-16 p-1 px-4 lg:py-4 '>
      <div className='text-3xl flex lg:flex-row flex-col items-center justify-around '>
        <div className='flex '>
          <div className='vertical-rl flex items-center justify-center flex-col'>
            <Link to='/' className='hover:text-[#478807] ease'>
              <h1>PEPE</h1>
            </Link>
            <Link to='/' className='hover:text-[#478807] ease'>
              <h1 className='font-semibold text-4xl'>ANGRY</h1>
            </Link>
          </div>
          <div className='grid grid-cols-2 m-8 gap-8'>
            <Link target='_blank' to='https://t.me/AngryPepePortal'>
              <div className='border-solid border-2 border-black  h-[60px] w-[60px] rounded-full flex items-center justify-center'>
                <IconButton >
                  <TelegramIcon fontSize='large' color='black' className='text-black' />
                </IconButton>
              </div>
            </Link>
            <Link target='_blank' to='https://twitter.com/AngryPepeETH'>
              <div className='border-solid border-2 border-black  h-[60px] w-[60px] rounded-full flex items-center justify-center'>
                <IconButton>
                  <TwitterIcon fontSize='large' color='black' className='text-black' />
                </IconButton>
              </div>
            </Link>
            <Link target='_blank' to='https://discord.com/invite/SYwe35hxab'>
              <div className='border-solid border-2 border-black  h-[60px] w-[60px] rounded-full flex items-center justify-center'>
                <IconButton>
                  <img src={discord} alt="" />
                </IconButton>
              </div>
            </Link>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center lg:m-0 m-4'>
          <h1 className='lg:text-5xl text-4xl font-semibold'>"You missed $PEPE,<br /> now you're an $APEPE"</h1>
        </div>
      </div>

    </section>
  )
}

export default Header
import React from 'react'
import meme from '../assets/images/meme2.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <div className='grid lg:grid-cols-2 lg:px-24 px-8'>
      <img className='rounded-xl' src={meme} alt="" />
      <div className='flex flex-col gap-4 mt-4 items-center justify-around'>
        <Link target='_blank' to='https://app.uniswap.org/#/tokens/ethereum/0xb656fe66e9360ce1e1c2ee84006a37b95c95b8b0' className=' contract-btn border mt-4 rounded-full bg-[#478807] flex items-center justify-center w-[100%] lg:w-[60%] justify-around'>
          <Button variant='contained' className='btn contract-btn border p-3 mt-4 rounded-full bg-[#478807] flex items-center justify-center w-[100%] w-[100%] justify-around'>
            <p className='text-sm lg:text-lg  '>BUY $HEET</p>
            <ArrowForwardIosIcon />
          </Button>
        </Link>
        <Link target='_blank' to='https://www.dextools.io/app/en/pairs' className=' contract-btn border mt-4 rounded-full bg-[#478807] flex items-center justify-center w-[100%] lg:w-[60%] justify-around'>
          <Button variant='contained' className='btn contract-btn border p-3 mt-4 rounded-full bg-[#478807] flex items-center justify-center w-[100%] w-[100%] justify-around'>
            <p className='text-sm lg:text-lg  '>CHAT ON DEXTOOLS</p>
            <ArrowForwardIosIcon />
          </Button>
        </Link>
        <Link target='_blank' to='https://etherscan.io/token/0xb656fe66E9360ce1e1c2Ee84006a37B95c95B8b0' className=' contract-btn border mt-4 rounded-full bg-[#478807] flex items-center justify-center w-[100%] lg:w-[60%] justify-around'>
          <Button variant='contained' className='btn contract-btn border p-3 mt-4 rounded-full bg-[#478807] flex items-center justify-center w-[100%] w-[100%] justify-around'>
            <p className='text-sm lg:text-lg  '>ETHERSCAN CONTRACT</p>
            <ArrowForwardIosIcon />
          </Button>
        </Link>
        <Link target='_blank' to='https://www.coingecko.com/' className=' contract-btn border mt-4 rounded-full bg-[#478807] flex items-center justify-center w-[100%] lg:w-[60%] justify-around'>
          <Button variant='contained' className='btn contract-btn border p-3 mt-4 rounded-full bg-[#478807] flex items-center justify-center w-[100%] w-[100%] justify-around'>
            <p className='text-sm lg:text-lg  '>COINGECKO (SOON)</p>
            <ArrowForwardIosIcon />
          </Button>
        </Link>
        <Link target='_blank' to='https://coinmarketcap.com/dexscan/ethereum/0xfe4c837de6598d0cb90188bf621779da449e223c/' className=' contract-btn border mt-4 rounded-full bg-[#478807] flex items-center justify-center w-[100%] lg:w-[60%] justify-around'>
          <Button variant='contained' className='btn contract-btn border p-3 mt-4 rounded-full bg-[#478807] flex items-center justify-center w-[100%] w-[100%] justify-around'>
            <p className='text-sm lg:text-lg  '>COINMARKETCAP</p>
            <ArrowForwardIosIcon />
          </Button>
        </Link>

      </div>
    </div>
  )
}

export default Links
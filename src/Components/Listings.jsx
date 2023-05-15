import React from 'react'
import Hotbit from '../assets/images/HotBit.webp'
import Gate from '../assets/images/gate.png'
import Huobi from '../assets/images/Huobi.webp'
import MEXC from '../assets/images/MEXC.webp'
import BitMart from '../assets/images/bitmart-1.webp'
import { Link } from 'react-router-dom'

const Listings = () => {
  return (
    <div className='grid lg:grid-cols-2  lg:px-24 px-8 py-16 mt-16'>
      <div>
        <Link target='_blank' to='https://www.hotbit.io/markets' className='flex flex-col items-center justify-center'>
          <h1 className='culture font-light text-5xl mb-4'>Listed On</h1>
          <img src={Hotbit} width='200' alt="" />
        </Link>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='culture font-light text-5xl mb-4'>Coming Soon</h1>
        <div className='grid grid-cols-2 gap-8'>
          <Link target='_blank' to='https://www.gate.io/' className='h-100'>
            <img src={Gate} alt="" />
          </Link>
          <Link target='_blank' to='https://www.huobi.com/en-us/'>
            <img src={Huobi} alt="" />
          </Link>
          <Link target='_blank' to='https://www.mexc.com/'>
            <img src={MEXC} alt="" />
          </Link>
          <Link target='_blank' to='https://www.bitmart.com/en-US'>
            <img src={BitMart} alt="" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Listings
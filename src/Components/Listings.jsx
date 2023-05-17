import React from 'react'
import Hotbit from '../assets/images/HotBit.webp'
import Gate from '../assets/images/gate.png'
import Huobi from '../assets/images/Huobi.webp'
import MEXC from '../assets/images/MEXC.webp'
import BitMart from '../assets/images/bitmart-1.webp'
import { Link } from 'react-router-dom'

// import widget from 'https://www.dextools.io/widgets/en/ether/pe-light/0x3bcfd7f139a4286a37aabff1cbde1447e90a6d57?theme=light&chartType=2&chartResolution=30&drawingToolbars=false'

// const widget = () =>(
//   ('https://www.dextools.io/widgets/en/ether/pe-light/0x3bcfd7f139a4286a37aabff1cbde1447e90a6d57?theme=light&chartType=2&chartResolution=30&drawingToolbars=false')
// )

const Listings = () => {
  return (
    <div className='grid lg:grid-cols-1  lg:px-24 px-8 py-16 mt-16'>
      <div>
        <Link target='_blank' to='https://www.hotbit.io/markets' className='flex flex-col items-center justify-center'>
          <h1 className='culture font-light text-5xl mb-4'>CHART</h1>
          <iframe id="dextools-widget" title="DEXTools Trading Chart" className='h-[500px] w-[100%]' src="https://www.youtube.com/embed/uXWycyeTeCs" ></iframe>        
        </Link>
      </div>
      {/* <div className='flex flex-col items-center justify-center'>
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
      </div> */}
    </div>
  )
}

export default Listings
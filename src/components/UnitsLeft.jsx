import React from 'react'
import { Box } from 'lucide-react';

const UnitsLeft = () => {
  return (
    <div className='text-white flex flex-col md:flex-row w-140 items-center justify-center border border-[#1f232a] rounded-md'>
        <div className='rounded-full h-21 w-21 shrink-0 items-center border justify-center flex md:mx-5 border-[#1f232a] bg-[#16181d] mt-4'>
            <Box className='size-15 text-[#d4af37]'/>
        </div>
        <div className='flex flex-col  md:pl-4 items-center justify-center w-5/8 md:border-l md:border-[#1f232a] my-5'>
            <p className='text-[16px] text-[#d4af37]'>LIMITED TO 2000 UNITS</p>
            <p className='text-5xl'>1,842</p>
            <p className='text-[18px] text-[#d4af37]'>UNITS LEFT</p>
        </div>
        <div className='text-[18px] md:px-3 mb-4 md:border-l px-20 text-center border-[#1f232a] text-[#a6a9b1]'>
            Once they're gone, they're gone.
        </div>
    </div>
  )
}

export default UnitsLeft
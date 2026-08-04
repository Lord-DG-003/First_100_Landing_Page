import React from 'react'
import { Box } from 'lucide-react';

const UnitsLeft = () => {
  return (
    <div className='text-white flex w-140 items-center justify-center border border-[#1f232a] rounded-md'>
        <div className='rounded-full h-21 w-21 shrink-0 items-center border justify-center flex mx-5 border-[#1f232a] bg-[#16181d]'>
            <Box className='size-15 text-[#d4af37]'/>
        </div>
        <div className='flex flex-col  pl-4 justify-center w-5/8 border-l border-[#1f232a]'>
            <p className='text-[16px] text-[#d4af37]'>LIMITED TO 2000 UNITS</p>
            <p className='text-5xl'>1,842</p>
            <p className='text-[18px] text-[#d4af37]'>UNITS LEFT</p>
        </div>
        <div className='text-[18px] pl-3 border-l border-[#1f232a] text-[#a6a9b1]'>
            Once they're gone, they're gone.
        </div>
    </div>
  )
}

export default UnitsLeft
import React from 'react'
import { LockKeyhole } from 'lucide-react';
import UnitsLeft from './UnitsLeft';

const Upper = () => {
  return (
    <div className='text-[#ffffff] flex flex-col w-full items-center mt-4'>
       <div className='flex text-[#d4af37] text-[10px] h-fit w-fit px-3  border-[#1f232a] border py-1 rounded-md'>
            <LockKeyhole className='size-3 mr-3'/>EXCLUSIVE DIGITAL EBOOK
       </div>
        <div className='h-fit text-[#ffffff] w-70 text-6xl text-center'>
            Make Your <span className='text-[#d4af37]'>First</span> $100.
        </div>
        <div className='h-fit w-90 text-[#a6a9b1] text-center mt-5 text-[14px]'>
            A practical guide for students to earn their first $100 online - no experience, no fluff.
        </div>
        <UnitsLeft/>
    </div>
  )
}

export default Upper
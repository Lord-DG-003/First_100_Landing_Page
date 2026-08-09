import React from 'react'
import { LockKeyhole } from 'lucide-react';
import UnitsLeft from './UnitsLeft';

const Upper = () => {
  return (
    <header className='text-[#ffffff] flex flex-col w-full items-center mt-8 md:mt-12 px-4'>

       <div className='flex items-center text-[#d4af37] text-[10px] md:text-xs font-medium tracking-wide h-fit w-fit px-3 border-[#1f232a] border py-1.5 rounded-md bg-black font-inter'>
            <LockKeyhole className='size-3 mr-2' aria-hidden="true"/>
            <span>EXCLUSIVE DIGITAL EBOOK</span>
       </div>

       <h1 
         className='w-full text-5xl md:text-6xl lg:text-[80px] font-bold text-center mt-5 md:mt-6 leading-[1.05] font-satoshi'
         aria-label="Make Your First $100."
          >
            <span className="block" aria-hidden="true">Make Your</span>
            <span className="block" aria-hidden="true">
                <span className='text-[#d4af37]'>First</span> $100.
            </span>
       </h1>
       
       <p className='w-full text-[#a6a9b1] text-center mt-5 md:mt-6 text-sm md:text-[21px] leading-relaxed font-inter md:px-0 px-20'>
            <span className="block">A practical guide for students to earn their first $100</span>
            <span className="block">online - no experience, no fluff.</span>
       </p>
       
       <div className="mt-8 md:mt-10 w-full flex justify-center">
           <UnitsLeft/>
       </div>
       
    </header>
  )
}

export default Upper
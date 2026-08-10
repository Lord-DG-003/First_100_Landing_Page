import React from 'react';
import { VscThreeBars } from "react-icons/vsc";

const Navbar = () => {
  return (
    <nav className='text-[#ffffff] flex justify-between items-center pt-4 px-4 sm:px-6 md:px-10 font-semibold font-inter border-b border-[#1f232a] py-3'>
        
        <div className='text-xl sm:text-2xl' aria-label="First 100">
            First<span className='text-[#dfaf37]'>100</span>
        </div>
        
        <div className='w-1/4 flex items-center text-sm justify-between'>
            <a href="#about" className='hidden md:block'>About</a>
            <a href="#faq" className='hidden md:block'>FAQ</a>
            <button className='border px-5 py-1 rounded-md text-[#dfaf37] uppercase cursor-pointer hidden md:block'>
                Get More
            </button>
            <VscThreeBars size={24} className='md:hidden ml-14' />
        </div>
        
    </nav>
  )
}

export default Navbar
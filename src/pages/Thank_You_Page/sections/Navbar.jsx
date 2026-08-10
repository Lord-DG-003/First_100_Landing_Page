import React from 'react';
import { VscThreeBars } from "react-icons/vsc";

const Navbar = () => {
  return (
    <nav className='text-[#ffffff] flex justify-between items-center pt-4 px-4 sm:px-6 md:px-10 font-semibold font-inter border-b border-[#1f232a] py-3'>
        
        <div className='text-xl sm:text-2xl' aria-label="First 100">
            First<span className='text-[#dfaf37]'>100</span>
        </div>
        <div className='font-inter md:text-lg text-[17px] uppercase hover:text-white text-[#ece7e7]'><a href="mailto:hustlemote@gmail.com">Contact</a></div>
    </nav>
  )
}

export default Navbar
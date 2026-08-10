import React from 'react'

const Navbar = () => {
  return (
    <nav className='text-[#ffffff] flex justify-between items-center pt-4 px-4 sm:px-6 md:px-10 font-semibold font-inter border-b border-[#1f232a] py-3'>
        
        <div className='text-xl sm:text-2xl' aria-label="First 100">
            First<span className='text-[#dfaf37]'>100</span>
        </div>
        
        <div className='w-1/4 flex items-center text-sm justify-between'>
            <a href="#about">About</a>
            <a href="#faq">FAQ</a>
            <button className='border px-5 py-1 rounded-md text-[#dfaf37] uppercase cursor-pointer'>
                Get More
            </button>
        </div>
        
    </nav>
  )
}

export default Navbar
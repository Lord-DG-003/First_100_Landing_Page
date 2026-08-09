import React from 'react'

const Navbar = () => {

  const scrollToComponent=()=>{
    const purchase = document.getElementById('purchase');
    if(purchase){
      purchase.scrollIntoView({behavior:'smooth'})
    }
  }

  return (
    <nav className='text-[#ffffff] flex justify-between items-center pt-4 px-4 sm:px-6 md:px-10 font-semibold font-inter border-b border-[#1f232a] pb-3'>
        
        <div className='text-xl sm:text-2xl' aria-label="First 100">
            First<span className='text-[#dfaf37]'>100</span>
        </div>
        
        <button 
          className='bg-[#f5e8c2] cursor-pointer text-xs sm:text-sm md:text-base text-black h-fit w-fit py-1.5 px-4 sm:py-2 sm:px-5 rounded-md focus:outline-none focus:ring-2 focus:ring-[#dfaf37] focus:ring-offset-2 focus:ring-offset-black'
          aria-label="Get the eBook" onClick={scrollToComponent}
          >
            GET THE EBOOK
        </button>
        
    </nav>
  )
}

export default Navbar
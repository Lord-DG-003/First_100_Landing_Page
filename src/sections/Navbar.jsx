import React from 'react'

const Navbar = () => {
  return (
    <div className='text-[#ffffff] flex justify-between pt-3 px-6 font-semibold'>
        <div className='text-lg'>
            First<span className='text-[#dfaf37]'>100</span>
        </div>
        <button className='bg-[#f5e8c2] text-[10px] text-black h-fit w-fit py-1 px-3 rounded-md'>
            GET THE EBOOK
        </button>
    </div>
  )
}

export default Navbar
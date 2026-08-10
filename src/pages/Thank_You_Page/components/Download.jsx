import React from 'react'
import { FiDownload } from "react-icons/fi";


const Download = () => {
  return (
    <div className='flex items-center justify-center flex-col font-inter'>
        <button className='flex items-center justify-center h-fit w-fit text-center bg-linear-to-b from-[#ffe48c] to-[#f9ce41] px-12 py-2 mt-6 relative uppercase text-sm rounded-md font-semibold text-[#0d0e11] cursor-pointer active:scale-95 hover:from-[#ffda61] hover:to-[#ffc400] transition-all duration-100'>
            <FiDownload className='mr-3' />
            <p>Download Ebook (PDF)</p>
        </button>
        <p className='text-[#a6a9b1] mt-1.5 text-sm'>
            File size: 1.8 MB
        </p>
        <span className='w-180 h-px bg-[#1f232a] mt-2.5 hidden md:block'>
            
        </span>
    </div>
  )
}

export default Download
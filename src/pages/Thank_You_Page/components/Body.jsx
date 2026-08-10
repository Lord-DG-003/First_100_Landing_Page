import React from 'react';
import Download from '../components/Download';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Body = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center mt-3'>
        <IoIosCheckmarkCircleOutline size={60} className='text-[#d1a44e]'/>
        <h1 className='text-[#ffffff] text-5xl md:text-6xl mt-3 font-semibold font-satoshi'>
            Thank You!
        </h1>
        <p className='text-[#a6a9b1] mt-1.5 text-base md:text-lg font-inter mb-1   '>
            Your purchase was successful.
        </p>
        <p className='text-[#a6a9b1] -mt-1 text-base md:text-lg font-inter'>
            Your ebook is ready to download.
        </p>
        <div className=" bg-[#0d0e11]">
      
      {/* Book container */}
      <div className="relative w-63 bg-linear-to-br from-[#1a1a1c] to-[#111112] rounded-l-md rounded-r-xl shadow-[20px_20px_50px_rgba(0,0,0,0.8),inset_1px_1px_2px_rgba(255,255,255,0.05)] pt-6 px-6 mt-5 overflow-hidden">
        
        {/* Book spine */}
        <div className="absolute left-0 top-0 bottom-0 w-5 bg-linear-to-r from-[#0a0a0b] via-[#222225] to-[#161618] border-r border-black/50"></div>
        
        {/* Content wrapper */}
        <div className="ml-2.5 flex flex-col">
          
          <h2 className="text-white text-3xl font-semibold tracking-[0.02em] mb-1.5 [text-shadow:0px_4px_10px_rgba(0,0,0,0.5)] font-satoshi">
            MAKE YOUR
          </h2>
          
          <h1 className="text-[#d1a44e] text-[3rem] font-bold leading-[1.05]   [text-shadow:0px_10px_20px_rgba(0,0,0,0.6),0px_2px_4px_rgba(0,0,0,0.3)] font-inter mb-3">
            FIRST<br />
            $100.
          </h1>
          
          <p className="text-[#d1d1d1] text-[0.82rem] leading-[1.6] font-normal mb-7 font-inter">
            A practical guide for students<br />
            to earn their first $100 online -<br />
            no experience, no fluff.
          </p>
          
          <div className="w-30 h-[2.5px] bg-[#d1a44e] rounded-sm mb-8"></div>
          
        </div>
      </div>
    </div>
          <Download/>
    </div>
  )
}

export default Body
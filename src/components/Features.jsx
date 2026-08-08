import React from 'react'
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { BsBook } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { TfiLock } from "react-icons/tfi";

const Features = () => {
    const Logos = [<HiOutlineRocketLaunch className='md:size-14 size-12' />,<BsBook className='md:size-14 size-12' />,<TbTargetArrow className='md:size-14 size-12' />,<TfiLock className='md:size-14 size-12' />];
    const Titles = ["Start From Zero", "Step By Step", "Proven Methods", "Lifetime Access"];
    const Descriptions = ["No skills. No experience. Just a willingness to start.", "Clear, simple steps you can follow at your pace.", "Real methods that actually work for beginners.", "One-time payment. Read anytime, anywhere."];
  return (
    <div className='flex flex-wrap justify-center md:w-full md:border-0 w-90 rounded-xl max-w-237.5 mx-auto gap-4 md:gap-5 mt-10 px-4 border border-[#1f232a]'>
        {Logos.map((Logo,index)=>(
          <div key={index} className='flex md:flex-col md:items-center md:text-center md:border md:border-[#1f232a] w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(25%-1rem)] md:pt-8 px-1 md:pb-8 rounded-xl py-2.5'>
            <div className='text-[#d4af37] md:mb-4'>
              {Logo}
            </div>
            <div className='flex flex-col md:px-0 px-10'>
              <h3 className='text-[#ffffff] font-semibold text-base md:text-[21px] md:mb-2'>
                {Titles[index]}
              </h3>
              <p className='text-[#a6a9b1] md:px-2 md:text-[16.4px] leading-relaxed'>
                {Descriptions[index]}
              </p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Features
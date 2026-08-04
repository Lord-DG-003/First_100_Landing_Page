import React from 'react'
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { BsBook } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { TfiLock } from "react-icons/tfi";

const Features = () => {
    const Logos = [<HiOutlineRocketLaunch className='size-14' />,<BsBook className='size-14' />,<TbTargetArrow className='size-14' />,<TfiLock className='size-14' />];
    const Titles = ["Start From Zero", "Step By Step", "Proven Methods", "Lifetime Access"];
    const Descriptions = ["No skills. No experience. Just a willingness to start.", "Clear, simple steps you can follow at your pace.", "Real methods that actually work for beginners.", "One-time payment. Read anytime, anywhere."];
  return (
    <div className='flex flex-wrap justify-center w-full max-w-237.5 mx-auto gap-4 md:gap-5 mt-10  md:mt-10 px-4'>
        {Logos.map((Logo,index)=>(
          <div key={index} className='flex flex-col items-center text-center border border-[#1f232a] w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(25%-1rem)] pt-8 px-5 pb-8 rounded-xl'>
            <div className='text-[#d4af37] mb-4'>
              {Logo}
            </div>
            <h3 className='text-[#ffffff] font-semibold text-base md:text-[21px] mb-2'>
              {Titles[index]}
            </h3>
            <p className='text-[#a6a9b1] px-2 md:text-[16.4px] leading-relaxed'>
              {Descriptions[index]}
            </p>
          </div>
        ))}
    </div>
  )
}

export default Features
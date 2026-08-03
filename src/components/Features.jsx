import React from 'react'
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { BsBook } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { TfiLock } from "react-icons/tfi";

const Features = () => {
    const Logos = [<HiOutlineRocketLaunch className='size-10' />,<BsBook className='size-10' />,<TbTargetArrow className='size-10' />,<TfiLock className='size-10' />];
    const Titles = ["Start From Zero", "Step By Step", "Proven Methods", "Lifetime Access"];
    const Descriptions = ["No skills. No experience. Just a willingness to start.", "Clear, simple steps you can follow at your pace.", "Real methods that actually work for beginners.", "One-time payment. Read anytime, anywhere."];
  return (
    <div className='flex justify-center'>
        {Logos.map((Logo,index)=>(
          <div key={index} className='flex flex-col items-center text-center border border-[#1f232a] h-[1/2] w-[11.7%] pt-4 px-4 pb-6 gap-1 mt-4 mr-3 rounded-sm'>
            <div className='text-[#d4af37]'>
              {Logo}
            </div>
            <h3 className='text-[#ffffff] text-[16px]'>
              {Titles[index]}
            </h3>
            <p className='text-[#a6a9b1] text-[12px]'>
              {Descriptions[index]}
            </p>
          </div>
        ))}
    </div>
  )
}

export default Features
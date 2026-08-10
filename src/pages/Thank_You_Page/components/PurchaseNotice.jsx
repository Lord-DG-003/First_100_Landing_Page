import React from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { LuShieldCheck } from "react-icons/lu";

const PurchaseNotice = () => {

    const Logos=[<HiOutlineMail className='text-[#d1a44e] md:size-12 size-9' />,<LuShieldCheck className='text-[#d1a44e] md:size-12 size-9' />];
    const Titles=["We've sent your ebook to your email.","No refunds on digital products."];
    const Descriptions=["Didn't receive it? Check your spam folder or ","Please read our "];
    const Links=["contact support.","Terms of Use."]

  return (
    <div className='flex flex-col justify-center items-center mb-5 font-inter'>
        {Logos.map((Logo,index)=>(
            <div className='border border-[#1f232a] flex items-center h-fit w-92 md:w-120 mt-5 py-4 px-0 rounded-md'>
                <div className='h-15 w-15 rounded-full shrink-0 bg-[#161616] flex items-center justify-center md:mx-5 mx-1'>
                    {Logo}
                </div>
               <div className='border-l border-[#1f232a]'>
                    <h3 className='text-[#ffffff] font-semibold ml-4 text-[15.2px]'>
                        {Titles[index]}
                    </h3>
                    <p className='text-[#a6a9b1] ml-4 text-[14px] md:pr-6'>
                        {Descriptions[index]} <a href="#" className='text-[#d4af37] cursor-pointer hover:text-[#f5be08]'>{Links[index]}</a>
                    </p>
               </div>
            </div>
        ))}
    </div>
  )
}

export default PurchaseNotice
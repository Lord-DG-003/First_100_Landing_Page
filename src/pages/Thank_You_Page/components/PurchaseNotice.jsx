import React from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { LuShieldCheck } from "react-icons/lu";

const PurchaseNotice = () => {

    const Logos=[<HiOutlineMail className='text-[#d1a44e] size-12' />,<LuShieldCheck className='text-[#d1a44e] size-12' />];
    const Titles=["We've sent your ebook to your email.","No refunds on digital products."];
    const Descriptions=["Didn't receive it? Check your spam folder or contact support.","Please read our Terms of Use."];

  return (
    <div className='flex flex-col justify-center items-center mb-5 font-inter'>
        {Logos.map((Logo,index)=>(
            <div className='border border-[#1f232a] flex items-center h-fit w-120 mt-5 py-4 px-4 rounded-md'>
                <div className='h-18 w-18 rounded-full shrink-0 bg-[#161616] flex items-center justify-center mr-1.5'>
                    {Logo}
                </div>
               <div className='border-l border-[#1f232a]'>
                    <h3 className='text-[#ffffff] font-semibold ml-4'>
                        {Titles[index]}
                    </h3>
                    <p className='text-[#a6a9b1] ml-4'>
                        {Descriptions[index]}
                    </p>
               </div>
            </div>
        ))}
    </div>
  )
}

export default PurchaseNotice
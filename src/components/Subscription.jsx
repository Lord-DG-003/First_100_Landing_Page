import React from 'react';
import { LockKeyhole } from 'lucide-react';
import { LuShieldCheck } from "react-icons/lu";
import { RxLightningBolt } from "react-icons/rx";

const Subscription = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <p className='uppercase tracking-widest text-[#d4af37] text-[12px]'>
            One-time price
        </p>
        <h3 className='text-[#ffffff] text-3xl font-semibold tracking-widest'>
            $11
        </h3>
        <button className='bg-[#d4af37] flex rounded-sm px-8 py-2 mt-2 items-center'>
            <LockKeyhole size={15}/>
            <p className='uppercase tracking-wider pl-3 font-semibold text-md'>Get the ebook now</p>
        </button>

        <div className='text-[#ffffff] mb-7 flex items-center mt-3.5 text-[12px]'>
        <LuShieldCheck /> <p className='ml-1'>Secure Checkout</p> <span className='mx-5 h-0.5 w-0.5 rounded-full bg-[#f5e8c2]'></span>
        <RxLightningBolt /> <p className='ml-1'>Instant Access</p> <span className='mx-5 h-0.5 w-0.5 rounded-full bg-[#f5e8c2]'></span>
        <LuShieldCheck /> <p className='ml-1'>No Refunds</p>

        </div>


    </div>
  )
}

export default Subscription
import React from 'react';
import { LockKeyhole } from 'lucide-react';
import { LuShieldCheck } from "react-icons/lu";
import { RxLightningBolt } from "react-icons/rx";
import {useNavigate} from 'react-router-dom';

const Subscription = () => {
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate("/payment");
  }

  return (
    <div className='flex flex-col items-center justify-center px-4 w-full'>
        <p className='uppercase font-bold tracking-widest text-[#d4af37] text-[10px] md:text-lg font-inter'>
            One-time price
        </p>
        <h3 className='text-[#ffffff] text-5xl md:text-6xl font-bold tracking-tight mt-3 md:mt-4 font-satoshi'>
            $27
        </h3>
        <button className='bg-[#d4af37] font-inter cursor-pointer active:scale-95 transform transition-all text-[#0a0a0a] flex rounded-lg w-full max-w-105 justify-center py-3.5 md:py-4 mt-6 md:mt-8 items-center hover:bg-[#c39b2b]' onClick={handleClick}>
            <LockKeyhole size={18} className="md:size-5"/>
            <div id='purchase'><p className='uppercase tracking-widest pl-3 font-bold text-sm md:text-[15px]'>Get the ebook now</p></div>
        </button>

        <div className='text-[#a6a9b1] mb-12 flex items-center justify-center mt-6 md:mt-8 text-xs md:text-sm gap-3 md:gap-0 font-inter'>
          <div className="flex items-center">
             <LuShieldCheck className="text-lg md:text-base" /> <p className='ml-1.5'>Secure Checkout</p>
          </div>
          <span className='hidden md:block mx-5 h-1 w-1 rounded-full bg-[#444]'></span>
          
          <div className="flex items-center">
             <RxLightningBolt className="text-lg md:text-base" /> <p className='ml-1.5'>Instant Access</p>
          </div>
          <span className='hidden md:block mx-5 h-1 w-1 rounded-full bg-[#444]'></span>
          
          <div className="flex items-center">
             <LuShieldCheck className="text-lg md:text-base" /> <p className='ml-1.5'>No Refunds</p>
          </div>
        </div>

    </div>
  )
}

export default Subscription
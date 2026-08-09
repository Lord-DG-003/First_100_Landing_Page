import React from 'react';
import { VscLockSmall } from "react-icons/vsc";
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();
    const handleClick=()=>{
        navigate("/");
    }

  return (
    <nav className='text-[#ffffff] flex justify-between items-center pt-4 px-4 sm:px-6 md:px-10 font-semibold border-b border-neutral-800 py-4 font-inter bg-black'>
        
        <div className='text-lg sm:text-2xl' aria-label="First 100">
            First<span className='text-[#dfaf37]'>100</span>
        </div>
        
        <div className='flex items-center text-[#a6a9b1] px-4'>
            <VscLockSmall size={24} className='mr-2'/>Secure Checkout
        </div>

        <button className='md:flex hidden items-center text-[#c6c6c6] cursor-pointer hover:text-amber-50 active:scale-97' onClick={handleClick}>
            <MdKeyboardBackspace className='mr-2' size={24}/>Back to Home
        </button>
        
    </nav>
  )
}

export default Navbar
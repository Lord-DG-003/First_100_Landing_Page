import React from 'react';
import { FiAlertCircle } from "react-icons/fi"; // You can use any alert icon you prefer

const Notice = () => {
  return (
    <div className="flex justify-center p-12 bg-[#0a0a0a]">
      <div className="relative border border-[#d4af37] rounded-lg px-8 py-6 w-full max-w-xl text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 bg-[#0a0a0a] px-4 text-[#d4af37] font-bold tracking-widest text-[13px] uppercase">
          <FiAlertCircle size={30} />
          <span>Important</span>
        </div>

        <p className="text-gray-200 text-base md:text-[16px]">
          This is a digital product. <span className="text-[#d4af37] font-semibold">No refunds</span> once the payment is made.
        </p>
        
      </div>
      
    </div>
  );
};

export default Notice;
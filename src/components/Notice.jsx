import React from 'react';
import { FiAlertCircle } from "react-icons/fi"; 

const Notice = () => {
  return (
    <div className="flex justify-center px-4 py-8 md:py-16 w-full">
      <div className="relative border border-[#d4af37]/40 rounded-xl px-6 md:px-12 py-8 w-full max-w-212.5 text-center mt-4 md:mt-1]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 bg-black px-4 md:px-6 text-[#d4af37] font-bold tracking-widest text-[11px] md:text-lg uppercase">
          <FiAlertCircle size={20} className="md:size-6" />
          <span>Important</span>
        </div>

        <p className="text-[#a6a9b1] md:p-0 px-16 text-[16px] md:text-lg leading-relaxed">
          This is a digital product. <span className="text-[#d4af37] font-semibold">No refunds</span> once the payment is made.
        </p>
        
      </div>
      
    </div>
  );
};

export default Notice;
import React from 'react';

const Footer = () => {
  return (
    <div className='flex justify-between items-center w-full px-8 py-6 border-t border-gray-800 bg-[#0a0a0a] text-white'>
      
      <div className='text-lg font-semibold flex-1'>
        First<span className='text-[#d4af37]'>100</span>
      </div>
      
      {/* Center: Copyright */}
      <div className='text-sm text-gray-400 flex-1 text-center'>
        © 2025 First100. All rights reserved.
      </div>
      
      {/* Right: Links */}
      <div className='flex justify-end gap-8 text-[12px] font-medium text-gray-300 flex-1 tracking-wide'>
        <a href="#privacy" className='hover:text-white transition-colors'>PRIVACY</a>
        <a href="#terms" className='hover:text-white transition-colors'>TERMS</a>
        <a href="#contact" className='hover:text-white transition-colors'>CONTACT</a>
      </div>

    </div>
  );
}

export default Footer;
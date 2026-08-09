import React from 'react';

const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-10 py-8 md:py-6 border-t border-[#1f232a] bg-[#0a0a0a] text-white gap-6 md:gap-0 font-inter'>
      
      <div className='text-xl md:text-2xl font-bold flex-1 text-center md:text-left w-full' aria-label="First 100">
        First<span className='text-[#d4af37]'>100</span>
      </div>
      
      <div className='text-[11px] md:text-xs text-[#a6a9b1] flex-1 text-center order-last md:order-0 w-full'>
        © 2025 First100. All rights reserved.
      </div>
      
      <div className='flex justify-center md:justify-end gap-6 md:gap-8 text-[11px] md:text-xs font-bold text-[#a6a9b1] flex-1 tracking-widest w-full'>
        <a href="https://www.notion.so/Privacy-Policy-3b41d86144e6800f8c62d67193df23aa?source=copy_link" className='hover:text-[#d4af37] md:hover:text-white transition-colors'>PRIVACY</a>
        <a href="https://www.notion.so/Terms-Conditions-3b41d86144e6809f92cbd3e8eceb7146?source=copy_link" className='hover:text-[#d4af37] md:hover:text-white transition-colors'>TERMS</a>
        <a href="#contact" className='hover:text-[#d4af37] md:hover:text-white transition-colors'>CONTACT</a>
      </div>

    </footer>
  );
}

export default Footer;
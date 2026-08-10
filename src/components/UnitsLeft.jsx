import React, { useState,useEffect } from 'react'
import { Box } from 'lucide-react';
import { doc,onSnapshot } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const UnitsLeft = () => {

    const [units,setUnits]=useState(1842);

    useEffect(() => {
    // Point to the inventory/product1 document you created
    const productRef = doc(db, 'inventory', 'product1');

    // Listen for live updates
    const unsubscribe = onSnapshot(productRef, (docSnap) => {
      if (docSnap.exists()) {
        setUnits(docSnap.data().units);
      }
    });

    // Stop listening when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className='text-white flex flex-col md:flex-row w-160 items-center justify-center border border-[#1f232a] rounded-xl bg-[#131313] font-inter  '>
        <div className='rounded-full h-21 w-21 shrink-0 items-center border justify-center flex md:mx-5 border-[#1f232a] bg-[#16181d] md:mt-4 mt-2'>
            <Box className='size-15 text-[#d4af37]'/>
        </div>
        <div className='flex flex-col md-pt-0  md:pl-4 items-center justify-center w-5/8 md:border-l md:border-[#1f232a] md:my-5 my-1.5'>
            <p className='text-[16px] text-[#d4af37]'>LIMITED TO 2000 UNITS</p>
            <p className='text-5xl pt-3 md:pt-1'>{units.toLocaleString()}</p>
            <p className='text-[18px] pt-3 md:pt-2 text-[#d4af37]'>UNITS LEFT</p>
        </div>
        <div className='text-[18px] md:px-3 mb-4 md:border-l px-20 text-center border-[#1f232a] text-[#a6a9b1]'>
            Once they're gone, they're gone.
        </div>
    </div>
  )
}

export default UnitsLeft
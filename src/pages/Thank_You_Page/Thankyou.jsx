import React from 'react';
import Navbar from './sections/Navbar';
import Body from './components/Body';
import PurchaseNotice from './components/PurchaseNotice';
import Footer from './sections/Footer';


const Thankyou = () => {
  return (
    <div className='bg-black h-full w-full flex flex-col'>
      <Navbar/>
      <Body/>
      <PurchaseNotice/>
      <Footer/>
    </div>
  )
}

export default Thankyou
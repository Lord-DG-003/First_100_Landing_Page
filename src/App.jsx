import React, {useEffect} from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './sections/Navbar'
import Upper from './components/Upper'
import Features from './components/Features'
import Notice from './components/Notice'
import Subscription from './components/Subscription'
import Footer from './sections/Footer'

import Payment from './pages/Payment_Page/Payment';
import Thankyou from './pages/Thank_You_Page/Thankyou';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const LandingPageLayout = () => {
  return (
    <div className='bg-[#0a0a0a] h-full w-full flex flex-col'>
      <Navbar/>
      <Upper/>
      <Features/>   
      <Notice/>   
      <Subscription/>
      <Footer/>
    </div>
  )
}

const App = () => {
  return (
    <div className='font-satoshi'>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<LandingPageLayout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/thank-you" element={<Thankyou />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
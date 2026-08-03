import React from 'react'
import Navbar from './sections/Navbar'
import Upper from './components/Upper'
import Features from './components/Features'
import Notice from './components/Notice'
import Subscription from './components/Subscription'
import Footer from './sections/Footer'


const App = () => {
  return (
    <div className='bg-[#0d0e11] h-full w-full flex flex-col'>
      <Navbar/>
      <Upper/>
      <Features/>   
      <Notice/>   
      <Subscription/>
      <Footer/>
    </div>
  )
}

export default App
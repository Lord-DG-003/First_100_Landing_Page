import React, { useState } from 'react';
import { FiAlertCircle } from "react-icons/fi"; 
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [email, setEmail] = useState('');

  const handlePayPalClick = (e) => {
    e.preventDefault();
    // Break long URLs by concatenating them if needed, 
    // or just leave them as one string.
    window.location.href = 
      "https://www.paypal.com/ncp/payment/V2YHE4KCSQ932"; 
  };

  const navigate=useNavigate();
  const handleClick = () => {
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 flex justify-center items-start">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: Checkout Form */}
        <div className="lg:col-span-7 bg-[#111111] border border-neutral-800 rounded-2xl p-6 md:p-8 flex flex-col gap-6">
          
          {/* Header */}
          <div>
            <div className='flex items-center justify-between pb-2'><h2 className="text-2xl font-semibold mb-1">Checkout</h2><button className='cursor-pointer' onClick={handleClick}><MdKeyboardBackspace size={25} className='md:hidden'/></button></div>
            <p className="text-neutral-400 text-sm">Complete your purchase to get instant access.</p>
          </div>

          {/* Email Input */}
          <form onSubmit={handlePayPalClick}>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-neutral-300">Email Address</label>
              <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="youremail@gmail.com"
              className="w-full bg-[#1a1a1a] border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-500/50 transition-colors"
              />
            </div>

            {/* Payment Method */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-neutral-300 pt-4">Payment Method</label>
            
              {/* PayPal Box */}
              <div className="border border-[#dfaf37] bg-[#1a1a1a] rounded-xl p-4 flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-4">
                  {/* Custom Radio Button */}
                  <div className="w-5 h-5 rounded-full border-2 border-[#dfaf37] flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#dfaf37]"></div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-lg italic text-white">PayPal</span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-0.5">Pay securely with your PayPal account.</p>
                  </div>
                </div>
                <span className="text-blue-500 font-bold italic text-sm">PayPal</span>
              </div>
            
              <div className="flex items-center gap-2 mt-2">
                <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                <p className="text-xs text-neutral-400">You'll be redirected to PayPal to complete your payment securely.</p>
              </div>
            </div>

            {/* Checkout Button */}
            <button type='submit' className="w-full bg-[#FFC439] hover:bg-[#FFC439]/90 text-black font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors mt-4 cursor-pointer active:scale-90">
              <span className="font-bold italic">PayPal</span>
              <span>Pay with PayPal</span>
            </button>
  
          </form>
          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-800 mt-1">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 text-center md:text-left">
              <svg className="w-5 h-5 text-neutral-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              <div>
                <p className="text-xs font-medium text-neutral-300">Secure Payment</p>
                <p className="text-[10px] text-neutral-500">SSL Encrypted</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 text-center md:text-left">
              <svg className="w-5 h-5 text-neutral-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <div>
                <p className="text-xs font-medium text-neutral-300">Instant Access</p>
                <p className="text-[10px] text-neutral-500">Get it right away</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 text-center md:text-left">
              <svg className="w-5 h-5 text-neutral-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <div>
                <p className="text-xs font-medium text-neutral-300">No Hidden Fees</p>
                <p className="text-[10px] text-neutral-500">What you see is what you pay</p>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="border border-yellow-700/40 bg-yellow-900/10 rounded-xl p-4 mt-2 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <FiAlertCircle className='text-[#dfaf37]'/>
              <span className="text-sm font-semibold text-[#dfaf37]">Important</span>
            </div>
            <p className="text-xs text-neutral-400 ml-6">
              This is a digital product. <span className="text-[#dfaf37]">No refunds</span> once the payment is made.
            </p>
          </div>

        </div>

        {/* RIGHT COLUMN: Order Summary */}
        <div className="lg:col-span-5 bg-[#111111] border border-neutral-800 rounded-2xl p-6 md:p-8 flex flex-col h-fit">
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
          
          {/* Product Row */}
          <div className="flex gap-4 mb-8">
            {/* Placeholder for the Book Cover */}
            <div className="w-16 h-24 bg-neutral-800 rounded border border-neutral-700 flex flex-col items-center justify-center p-1 text-center shrink-0">
              <span className="text-[8px] text-[#dfaf37] font-bold leading-tight">Make Your<br/>First $100</span>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-sm font-semibold text-white">Make Your First $100</h3>
              <p className="text-xs text-neutral-400 mt-1">Digital eBook</p>
              <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                A practical guide for students to earn their first $100 online.
              </p>
            </div>
          </div>

          {/* Pricing */}
          <div className="flex justify-between items-center text-sm mb-4">
            <span className="text-neutral-400">Price</span>
            <span className="text-white">$27.00</span>
          </div>
          
          <div className="border-t border-neutral-800 my-4"></div>
          
          <div className="flex justify-between items-center mb-8">
            <span className="font-semibold">Total</span>
            <span className="text-[#dfaf37] font-bold text-lg">$27.00</span>
          </div>

          {/* Feature List */}
          <div className="flex flex-col gap-5 grow">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-neutral-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              <div>
                <p className="text-sm font-medium text-neutral-200">Instant Access</p>
                <p className="text-xs text-neutral-500 mt-0.5">Get access immediately after payment.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-neutral-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              <div>
                <p className="text-sm font-medium text-neutral-200">Digital eBook</p>
                <p className="text-xs text-neutral-500 mt-0.5">Read online or download anywhere.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-neutral-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <div>
                <p className="text-sm font-medium text-neutral-200">One-Time Payment</p>
                <p className="text-xs text-neutral-500 mt-0.5">Pay once, access forever.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-neutral-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <div>
                <p className="text-sm font-medium text-neutral-200">No Refunds</p>
                <p className="text-xs text-neutral-500 mt-0.5">All sales are final. No refunds.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-neutral-800 flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            <p className="text-xs text-neutral-500">Secure checkout powered by <span className="text-blue-500 font-bold italic">PayPal</span></p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Checkout;
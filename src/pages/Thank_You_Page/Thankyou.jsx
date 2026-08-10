import React from 'react';
import Navbar from './sections/Navbar';
import Body from './components/Body';
import PurchaseNotice from './components/PurchaseNotice';
import Footer from './sections/Footer';
import { useRef,useEffect } from 'react';

import { doc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { useLocation, useNavigate } from 'react-router-dom';

const Thankyou = () => {

  const hasUpdated = useRef(false);
  const location = useLocation();
  const navigate = useNavigate(); 

  useEffect(() => {

    //comment it for testing, you can go to the thankyou page, else you will redirect to the home page if you just write /thank-you at the end of the url.
    const queryParams = new URLSearchParams(location.search);
    const hasPayPalToken = queryParams.get('token') || queryParams.get('paymentId') || queryParams.get('PayerID');

    // If there is no token in the URL, kick them back to the home page immediately
    if (!hasPayPalToken) {
      navigate('/'); 
      return; // Stop the rest of the code from running!
    }

    const deductInventory = async () => {
      if (hasUpdated.current) return;
      hasUpdated.current = true;

      try {
        const productRef = doc(db, 'inventory', 'product1');
        // Tell Firebase to subtract 1 securely
        await updateDoc(productRef, {
          units: increment(-1)
        });
        console.log("Inventory successfully updated!");
      } catch (error) {
        console.error("Error updating inventory: ", error);
      }
    };

    deductInventory();
  }, []);

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
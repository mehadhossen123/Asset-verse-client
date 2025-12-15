import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Components/Footer';
import { AnimatePresence } from 'framer-motion';

const AuthLayout = () => {
  const location=useLocation()
  useEffect(()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  },[])
    return (
      <div className=''>
        <div className="max-w-7xl mx-auto min-h-screen bg-black flex flex-col">
          <header>
            <Navbar />
          </header>

          <main className="flex-grow">
            <AnimatePresence mode='wait'>
              <Outlet key={location.pathname} />
            </AnimatePresence>
          </main>

          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    );
};

export default AuthLayout;
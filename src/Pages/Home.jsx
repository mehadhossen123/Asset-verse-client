import React from 'react';
import useAuth from '../Hooks/useAuth';
import Hero from '../Components/Hero';
import Package from '../Components/Package';
import Banner from '../Components/Banner';
import { motion } from 'framer-motion';
import About from '../Components/About';
import Features from '../Components/Features ';
import Testmonials from '../Components/Testmonials';
import ExtraSection from '../Components/ExtraSection';
motion

const Home = () => {
    const {user}=useAuth()
   
    return (
      <div className=" bg-black">
        <div className='flex flex-col justify-center items-center pb-10 md:pb-5   pt-24'>
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:text-5xl text-3xl font-bold text-white "
          >
            Welcome to AssetVerse
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg mt-4 text-yellow-700"
          >
            Smart way to manage your company assets
          </motion.p>
        </div>
        <Banner></Banner>
        <About></About>
        <Package></Package>
        <Features></Features>
      
       
        <Testmonials></Testmonials>
        <ExtraSection></ExtraSection>
      </div>
    );
};

export default Home;
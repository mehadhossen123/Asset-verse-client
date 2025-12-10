import React from 'react';
import useAuth from '../Hooks/useAuth';
import Hero from '../Components/Hero';
import Package from '../Components/Package';

const Home = () => {
    const {user}=useAuth()
    console.log(user)
    return (
        <div className='bg-black'>
           <Hero></Hero>
           <Package></Package>
            
        </div>
    );
};

export default Home;
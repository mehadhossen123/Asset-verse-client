import React from 'react';
import useAuth from '../Hooks/useAuth';
import Hero from '../Components/Hero';

const Home = () => {
    const {user}=useAuth()
    console.log(user)
    return (
        <div className='bg-black'>
           <Hero></Hero>
            
        </div>
    );
};

export default Home;
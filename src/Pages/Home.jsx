import React from 'react';
import useAuth from '../Hooks/useAuth';

const Home = () => {
    const {user}=useAuth()
    console.log(user)
    return (
        <div>
            Hello i  am form home 
            
        </div>
    );
};

export default Home;
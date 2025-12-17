import axios from 'axios';
import React from 'react';


const useAxios = () => {
    const instance = axios.create({
      baseURL: "https://asset-verse-server-swart.vercel.app",
    });

    return  instance
    
};

export default useAxios;
import axios from 'axios';
import React from 'react';


const useAxios = () => {
    const instance = axios.create({
      baseURL: "http://localhost:5173",
    });

    return  instance
    
};

export default useAxios;
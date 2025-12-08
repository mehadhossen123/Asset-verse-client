import React from 'react';
import useAuth from '../Hooks/useAuth';
import Loader from '../Components/Loading/Loader';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const location=useLocation()
  
   
    const {user,loading}=useAuth()
    if(loading){
        return <Loader></Loader>
    }
    if(!user){
        return <Navigate to={"/auth/login"} state={location?.pathname}></Navigate>
    }
    return children;
};

export default PrivateRoute;
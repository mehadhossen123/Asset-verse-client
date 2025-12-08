import React from 'react';
import Loader from '../Components/Loading/Loader';
import useRole from '../Hooks/useRole';
import Forbidden from '../Components/Forbidden';

const EmployeeRoute = ({children}) => {
    const {roleLoading,userRole}=useRole()
   
           
    if(roleLoading){
        return <Loader></Loader>
    }
    if(userRole!=='employee'){
        return <Forbidden></Forbidden>
    }


    return children;
            
       
   
};

export default EmployeeRoute;
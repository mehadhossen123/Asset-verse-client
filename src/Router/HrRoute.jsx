import React from 'react';
import useRole from '../Hooks/useRole';
import Loader from '../Components/Loading/Loader';

const HrRoute = ({children}) => {
    const { userRole, roleLoading } = useRole();
    if(roleLoading){
        return <Loader></Loader>
    }
    if(userRole!=='hr'){
        return <Forbidden></Forbidden>
    }


    return children;
};

export default HrRoute;
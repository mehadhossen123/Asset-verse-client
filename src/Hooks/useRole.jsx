import React from 'react';
import useAxios from './useAxios';
// import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useRole = () => {
    const axios=useAxios();
    const {user}=useAuth()
    // const axiosSecure=useAxiosSecure()
    const {data:userRole="",isLoading:roleLoading} = useQuery({

      queryKey: ["role",user?.email],
      enabled:!!user?.email,
      queryFn:async ()=>{
        const res = await axios.get(`/users/role?email=${user?.email}`
        );
        return res.data?.role;
      }
      
    });

    return {userRole,roleLoading}
};

export default useRole;
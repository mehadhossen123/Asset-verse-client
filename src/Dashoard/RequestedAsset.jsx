import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAuth from '../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const RequestedAsset = () => {

      const axiosSecure = useAxiosSecure();
      const { user } = useAuth();
      const { data:requestedAsset = [] } = useQuery({
        queryKey: ["requests", user?.email],
        queryFn: async () => {
          const res = await axiosSecure.get(`/requests?email=${user?.email}`);
          return res.data.data;
        },
      });


    return (
        <div>
            <h1 className='text-red-700'>All requested asset : </h1>
            
        </div>
    );
};

export default RequestedAsset;
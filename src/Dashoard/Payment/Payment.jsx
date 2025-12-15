import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Loader from '../../Components/Loading/Loader';
import useAuth from '../../Hooks/useAuth';

const Payment = () => {
    const {user}=useAuth()
    const {id}=useParams();
    const useAxios=useAxiosSecure();
    const {data:packageData={},isLoading}=useQuery({
        queryKey:['packages'],
        enabled:!!id,
        queryFn:async ()=>{
            const res = await useAxios.get(`/packages/${id}`);
            return res.data.data;
        }
    })
  
    if(isLoading){
        return <Loader></Loader>
    }


    const handlePayment=async()=>{
        const paymentInfo={
            packageName:packageData.name,
            packageId:packageData._id,
            hrEmail:user?.email,
            price:packageData.price,
            
        }
        const res=await useAxios.post('/create-checkout-session',paymentInfo)
       window.location.href=res.data.url;

    }

    return (
      <div>
        <h1 className="text-white text-4xl">Pay for :{packageData.name} </h1>
        <button onClick={handlePayment} className='button'>Pay </button>
      </div>
    );
};

export default Payment;
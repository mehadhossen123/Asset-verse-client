import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const PaymentSuccess = () => {
    let [searchParams] = useSearchParams();
    const sessionId=searchParams.get("session_id")
    const axiosSecure=useAxiosSecure()
   
    useEffect(()=>{
        if(sessionId){
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`
            ).then((res)=>{
                console.log(res.data)
            })

        }
    },[sessionId,axiosSecure])
    return (
        <div>
            <h1 className='text-green-700 text-2xl'>Your payment successful</h1>
            
        </div>
    );
};

export default PaymentSuccess;
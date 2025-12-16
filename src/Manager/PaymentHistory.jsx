import React from 'react';
import PageWarper from '../CustomItem/PageWarper';
import useAuth from '../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const PaymentHistory = () => {
    const {user}=useAuth()
    const axiosSecure=useAxiosSecure()
    const {data:payments=[]} = useQuery({
      queryKey: ["payments",user?.email],
      enabled:!!user?.email,
      queryFn:async()=>{
        const res = await axiosSecure.get(`/payments?email=${user?.email}`);
         return res.data.data;
      }
    });
   
    return (
      <PageWarper>
        <div>
          <h1 className="text-white text-3xl text-center lg:text-5xl my-10">
            {" "}
            Your All Payment History{" "}
          </h1>
          <div className="overflow-x-auto bg-white p-20 mx-5">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th className="text-yellow-700 text-center font-bold ">#</th>
                  <th className="text-yellow-700 text-center font-bold ">
                    Package name
                  </th>
                  <th className="text-yellow-700 text-center font-bold ">
                    Amount{" "}
                  </th>
                  <th className="text-yellow-700 text-center font-bold ">
                    Employee limit
                  </th>
                  <th className="text-yellow-700 text-center font-bold ">
                    Transaction id
                  </th>
                  <th className="text-yellow-700 text-center font-bold ">
                    Transaction date{" "}
                  </th>
                  <th className="text-yellow-700 text-center font-bold ">
                    Status{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, i) => (
                  <tr>
                    <th className="text-center font-bold ">{i + 1}</th>
                    <td className="text-center font-bold ">
                      {payment.packageName}
                    </td>
                    <td className="text-center font-bold ">{payment.amount}</td>
                    <td className="text-center font-bold ">
                      {payment.employeeLimit}
                    </td>
                    <td className="text-center font-bold ">
                      {payment.transactionId}
                    </td>
                    <td className="text-center font-bold ">
                     {new Date( payment.paymentDate).toLocaleString()}
                    </td>
                    <td className={`${payment.status==='paid'&& 'text-green-700 font-bold text-center'}`}>{payment.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </PageWarper>
    );
};

export default PaymentHistory;
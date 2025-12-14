import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAuth from '../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { ImCross } from "react-icons/im";
import { FcApprove } from "react-icons/fc";
import Swal from 'sweetalert2';


const RequestedAsset = () => {
    const axiosSecure=useAxiosSecure()

    
      const { user } = useAuth();
      const { data:requestedAsset = [] ,refetch} = useQuery({
        queryKey: ["requests", user?.email],
        queryFn: async () => {
          const res = await axiosSecure.get(`/requests?email=${user?.email}`);
          return res.data.data;
        },
      });
    //   console.log(requestedAsset)




 const handleAssetApproved = (data) => {
   Swal.fire({
     title: "Confirm Asset Approval?",
     text: "Are you sure? you want to approved the request.",
     icon: "warning",
     showCancelButton: true,
     confirmButtonText: "Yes, Approve",
     cancelButtonText: "Cancel",
   }).then((result) => {
     if (result.isConfirmed) {
       axiosSecure
         .patch(`/requests/approve/${data.assetId}`) 
        
         .then((res) => {
           if (res.data.success) {
             
             refetch();
             Swal.fire({
               position: "top-end",
               icon: "success",
               title: res.data.message || "Approved successful",
               showConfirmButton: false,
               timer: 1500,
             });
           } else {
             Swal.fire(
               "Failed!",
               res.data.message || "Approval process failed.",
               "error"
             );
           }
         }).catch((error)=>{
            console.log(" errro ",error)
            const errorMessage =
              
              error?.response?.data?.message
                ? error?.response?.data?.message
                : "Approved failed "; 

            Swal.fire({
              title: "Approval Failed!",
              text: errorMessage, 
              icon: "error",
              showCancelButton:true,
              confirmButtonText:"Ok",
              cancelButtonText:"Go to payment"
            }).then((result) => {
            if (result.dismiss === Swal.DismissReason.cancel) {
             window.location.href = "/dashboard/upgrade-package";
  }
});
         })
         
     }
   });
 };
 const handleDeleteRequest = (id) => {
   Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
  
          axiosSecure.delete(`/requests/${id}`).then((res) => {
            console.log(res.data)
            refetch()
             Swal.fire({
               title: "Deleted!",
               text:`${res?.data?.message}`,
               icon: "success",
             });
           
          });
         
        }
      });
 };

    return (
      <div>
        <h1 className="text-red-700">
          All requested asset :{requestedAsset.length}{" "}
        </h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-yellow-700 text-center">#</th>
                <th className="text-yellow-700 text-center">Employee</th>
                <th className="text-yellow-700 text-center">Asset</th>
                <th className="text-yellow-700 text-center">Date</th>
                <th className="text-yellow-700 text-center">Status</th>
                <th className="text-yellow-700 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requestedAsset.map((asset, i) => (
                <tr key={i}>
                  <td className="text-white text-center">{i + 1}</td>

                  <td className="flex justify-center">
                    <div>
                      <div className="font-bold text-white">
                        {asset.requesterName}
                      </div>
                    </div>
                  </td>

                  <td className="text-center">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={asset.assetImage} />
                    </div>
                  </td>

                  <td className="text-center text-white">
                    {asset.requestDate}
                  </td>
                  <td className="text-center text-white">
                    {asset.requestStatus == "approved" ? (
                      <p className="text-green-600 font-bold">
                        {asset.requestStatus}
                      </p>
                    ) : (
                      <p>{asset.requestStatus}</p>
                    )}
                  </td>
                  <td className="text-center text-white">
                    <button
                      onClick={() => handleAssetApproved(asset)}
                      className="px-6 py-1 text-2xl cursor-pointer mr-4 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
                    >
                      <FcApprove />
                    </button>
                    <button
                      onClick={() => handleDeleteRequest(asset._id)}
                      className="px-6 py-1 cursor-pointer text-2xl bg-gradient-to-r from-red-500 to-rose-400 hover:from-rose-400 hover:to-red-600 text-white font-semibold rounded-lg shadow-md transition duration-300 "
                    >
                      <ImCross />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default RequestedAsset;
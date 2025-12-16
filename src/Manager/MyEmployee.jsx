import React, { useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { MdDeleteOutline, MdOutlineWebAsset } from "react-icons/md";
import Swal from "sweetalert2";
import PageWarper from "../CustomItem/PageWarper";
motion;

const MyEmployee = () => {
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState("");

  const { user } = useAuth();
  const { data: myEmployee = [], refetch } = useQuery({
    queryKey: ["affiliations", user?.email, search],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/affiliations/myEmployee?email=${user?.email}&searchText=${search}`
      );
      return res?.data?.data;
    },
  });

  const handleDeleteEmployee = (id) => {
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
        axiosSecure.delete(`/affiliations/${id}`).then((res) => {
          refetch();
          console.log(res.data);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Remove successful ",
            showConfirmButton: false,
            timer: 1500,
          });
        });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <PageWarper>
      <div className=" ">
        {/* Search box  */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl text-center mt-4 text-white"
        >
          Your Employee
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 50 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex justify-center mt-5 "
        >
          <div className="join">
            <div>
              <label className="input validator join-item w-[700px]">
                <MdOutlineWebAsset className="text-2xl" />
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder="Search by employee name "
                  required
                />
              </label>
            </div>
            <button className=" bg-amber-600 join-item cursor-pointer  font-bold py-1 px-1">
              Search
            </button>
          </div>
        </motion.div>

        <div className="overflow-x-auto bg-white mx-5 my-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-center text-yellow-700 font-bold">#</th>

                <th className="text-center text-yellow-700 font-bold">
                  Employee Photo
                </th>
                <th className="text-center text-yellow-700 font-bold">
                  Employee Name
                </th>
                <th className="text-center text-yellow-700 font-bold">
                  Employee Email
                </th>
                <th className="text-center text-yellow-700 font-bold">
                  Company Name
                </th>
                <th className="text-center text-yellow-700 font-bold">
                  Join Date
                </th>

                <th className="text-center text-yellow-700 font-bold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {myEmployee.map((asset, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td className="text-center">
                    <div className="flex justify-center">
                      <img
                        className="w-15  h-15 rounded-full"
                        src={asset.employeeImage}
                        alt=""
                      />
                    </div>
                  </td>

                  <td className="text-center">{asset.employeeName}</td>
                  <td className="text-center">{asset.employeeEmail}</td>
                  <th className="text-center">{asset.companyName}</th>
                  <th className="text-center">
                    {new Date(asset.affiliationDate).toLocaleString()}
                  </th>

                  <th>
                    <button
                      onClick={() => handleDeleteEmployee(asset._id)}
                      className="btn text-white  text-2xl bg-gradient-to-r from-red-500 to-rose-400 hover:from-rose-400 hover:to-red-600"
                    >
                      {" "}
                      <MdDeleteOutline />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageWarper>
  );
};

export default MyEmployee;

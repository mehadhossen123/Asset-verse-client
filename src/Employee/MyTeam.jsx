import React, { useState } from 'react';
import useAuth from '../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const MyTeam = () => {
    const { user } = useAuth();
    const axiosSecure=useAxiosSecure()
    const [selectCompany,setSelectCompany]=useState("")
    const { data: uniqueCompany = [] } = useQuery({
      queryKey: ["uniqueCompany"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/affiliations/uniqueCompany`);
        return res.data.data;
      },
    });
  const{ data:teams=[]}=useQuery({
    queryKey:["teams",selectCompany],
    enabled:!!selectCompany,
    queryFn:async ()=>{
        const res = await axiosSecure.get(`affiliations?companyName=${selectCompany}`);
        return res.data.data;
    }
  })
 
    return (
      <div>
        <h1 className="text-5xl text-center text-white font-bold my-5 ">
          Your Team{" "}
        </h1>
        {/* Field set  */}
        <div className="flex justify-end  mr-5">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Browsers</legend>
            <select
              onChange={(e) => setSelectCompany(e.target.value)}
              defaultValue="Pick a browser"
              className="select"
            >
              <option>Select Company name </option>
              {uniqueCompany.map((company, i) => (
                <option key={i}>{company.companyName} </option>
              ))}
            </select>
          </fieldset>
        </div>
        {/* Table  of employee  */}
        {teams.length === 0 && (
          <h1 className="text-white text-center text-4xl min-h-screen flex justify-center items-center">
            Please select the company name{" "}
          </h1>
        )}
        <div className="grid md:grid-cols-3 px-5 sm:grid-cols-2 gap-6">
          {teams.map((emp) => (
            <div
              key={emp._id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={emp.employeeImage || teams}
                className="w-16 h-16 rounded-full mb-2"
              />
              {user?.email === emp.employeeEmail&&<h1 className='text-blue-600 text-3xl font-bold'>You</h1>}
              <h3 className="font-semibold">{emp.employeeName}</h3>
              <p className="text-sm">{emp.employeeEmail}</p>
              <p className="text-gray-500">{emp.position || "Employee"}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default MyTeam;
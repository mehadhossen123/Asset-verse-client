import React, { useState } from 'react';
// import useAuth from '../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const MyTeam = () => {
    // const { user } = useAuth();
    const axiosSecure=useAxiosSecure()
    const [selectCompany,setSelectCompany]=useState("")
    const { data: uniqueCompany = [] } = useQuery({
      queryKey: ["uniqueCompany"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/assignedAssets/uniqueCompany`);
        return res.data.data;
      },
    });
  console.log(selectCompany)

    return (
      <div>
        <h1 className="text-5xl text-center text-white font-bold my-5 ">
          Your Team{" "}
        </h1>
        {/* Field set  */}
        <div className="flex justify-end  mr-5">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Browsers</legend>
            <select onChange={(e)=>setSelectCompany(e.target.value)} defaultValue="Pick a browser" className="select">
              <option>Select Company name </option>
              {uniqueCompany.map((company, i) => (
                <option key={i}>{company.companyName} </option>
              ))}
            </select>
          
          </fieldset>
        </div>
      </div>
    );
};

export default MyTeam;
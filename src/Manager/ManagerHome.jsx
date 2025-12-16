import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAuth from '../Hooks/useAuth';
import Loader from '../Components/Loading/Loader';
import PageWarper from '../CustomItem/PageWarper';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const ManagerHome = () => {
    const axiosSecure=useAxiosSecure()
    const {user}=useAuth()
    const {data:items=[],isLoading}=useQuery({
        queryKey:["assets"],
        queryFn:async ()=>{
            const res = await axiosSecure.get(`/hr/asset-stats?email=${user?.email}`);
            return res.data.data;
        }
    })


   if (isLoading){
        return <Loader></Loader>
    }
  

    const piChartData=(data)=>{
        const res=data.map((item)=>{
            return {name:item._id,value:item.count}
        })
        return res;

    }

    


    return (
      <PageWarper>
        <div>
          <h1 className="text-white text-3xl lg:text-5xl font-bold text-center my-5">
            {" "}
            Details{" "}
          </h1>
          <p className="font-bold text-center text-yellow-700">
            See Details About Your Posted Asset With Rechart and Pi-Chart{" "}
          </p>
          <div className="w-full flex justify-center items-center ">
            <PieChart
              style={{
                width: "100%",
                maxWidth: "500px",
                maxHeight: "80vh",
                aspectRatio: 2,
              }}
              responsive
            >
              <Pie
                dataKey="value"
                startAngle={180}
                endAngle={0}
                data={piChartData(items)}
                cx="50%"
                cy="100%"
                outerRadius="120%"
                fill="#8884d8"
                label
                isAnimationActive={true}
              />
              <Tooltip></Tooltip>
              <Legend></Legend>
            </PieChart>
          </div>
          <h1 className="text-yellow-700 text-center">Pi chart for asset type</h1>
        </div>
      </PageWarper>
    );
};

export default ManagerHome;
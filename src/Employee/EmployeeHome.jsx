import React from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Components/Loading/Loader";
import PageWarper from "../CustomItem/PageWarper";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#A855F7",
  "#22C55E",
  "#EF4444",
];

const EmployeeHome = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: items = [], isLoading } = useQuery({
    queryKey: ["employee-asset-request", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/employee/asset-request?email=${user?.email}`
      );
      return res.data.data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  
  const pieChartData = items.map((item) => ({
    name: item._id,
    value: item.count,
  }));

  return (
    <PageWarper>
      <div>
        <h1 className="text-white text-3xl lg:text-5xl text-center my-5 font-bold">
          Asset Request Statistics
        </h1>

        {pieChartData.length === 0 ? (
          <p className="text-center text-gray-400">
            No asset request data available
          </p>
        ) : (
          <div className="w-full mt-24 flex justify-center items-center">
            <PieChart width={500} height={300}>
              <Pie
                data={pieChartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label={({ name, value }) => `${name}: ${value}`}
                isAnimationActive={true}
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        )}

        <h2 className="text-yellow-500 text-center mt-5">
          Pie chart showing asset request distribution
        </h2>
      </div>
    </PageWarper>
  );
};

export default EmployeeHome;

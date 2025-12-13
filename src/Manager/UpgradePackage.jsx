import React from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { TiTickOutline } from "react-icons/ti";

const UpgradePackage = () => {
  const axiosSecure = useAxiosSecure();

  const { data: pakData = [] } = useQuery({
    queryKey: ["package"],
    queryFn: async () => {
      const res = await axiosSecure.get("/packages");
      return res.data.data;
    },
  });

  return (
    <>
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white text-center text-4xl mt-5 font-bold"
        >
          Our All Packages
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-yellow-700 mt-5 text-center"
        >
          Upgrade your package and get outstanding features
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 py-5 lg:grid-cols-3">
        {pakData.map((data, i) => (
          <motion.div
            animate={{ y: [0, -30, 0, 30, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            key={i}
            className="
              w-full max-w-sm mx-auto my-3 bg-white rounded-xl shadow-2xl 
              border-indigo-600 overflow-hidden transform hover:scale-[1.02] 
              transition duration-300 ease-in-out border-2 
              flex flex-col justify-between h-full
            "
          >
            {/* Header */}
            <div className="p-4 text-center bg-indigo-50">
              <h3 className="text-3xl font-bold text-gray-800 tracking-tight">
                {data.name}
              </h3>

              {data.name === "Standard" && (
                <span className="inline-block bg-indigo-600 text-white text-xs font-semibold px-3 py-1 mt-2 rounded-full uppercase">
                  Most Popular
                </span>
              )}
            </div>

            {/* Price Section */}
            <div className="px-4 text-center">
              <p className="text-5xl font-extrabold text-gray-900">
                ${data.price}
                <span className="text-xl font-medium text-gray-500">/mo</span>
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Up to {data.employeeLimit} Employees
              </p>
            </div>

            {/* Features + Buy Now */}
            <div className="px-4 py-4 bg-gray-50 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-yellow-700 mb-3">
                Key Features:
              </h4>

              <ul className="text-sm text-gray-700">
                {data.features.map((feature, index) => (
                  <li key={index} className="flex items-start mb-1">
                    <TiTickOutline className="text-blue-600 mt-1" />
                    <span className="ml-1">{feature}</span>
                  </li>
                ))}
              </ul>

            </div>

            {/* Bottom Choose Button */}
            <div className="p-4">
             <button className="button w-full text-white">Upgrade Now</button>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default UpgradePackage;

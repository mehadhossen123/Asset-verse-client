import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { TiTickOutline } from "react-icons/ti";
import { motion } from "framer-motion";


const Package = () => {
  const useAxios = useAxiosSecure();
  const { data: pakData = [] } = useQuery({
    queryKey: ["package"],
    queryFn: async () => {
      const res = await useAxios.get("/packages");
      return res.data.data;
    },
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      viewport={{ once: false }}
    >
      <h1 className="text-white text-center lg:text-5xl text-3xl font-bold my-10">
        Our All Packages{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-5 lg:grid-cols-3">
        {pakData.map((data, i) => (
          <motion.div
            animate={{ y: [0, -30, 0, 30, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            key={i}
            class="w-full max-w-sm mx-auto  bg-white rounded-xl shadow-2xl border-indigo-600 overflow-hidden transform hover:scale-[1.02] transition duration-300 ease-in-out border-2  
    "
          >
            <div
              className=" text-center  bg-indigo-50
        "
            >
              <h3 className="text-3xl font-bold text-gray-800 tracking-tight">
                {data.name}
              </h3>

              {data.name === "Standard" && (
                <span className="inline-block bg-indigo-600 text-white text-xs font-semibold px-3 py-1 mt-1 rounded-full uppercase">
                  Most Popular
                </span>
              )}
            </div>

            <div className="px-4 pb-2 text-center">
              <p className="text-5xl font-extrabold text-gray-900">
                ${data.price}
                <span className="text-xl font-medium text-gray-500">/mo</span>
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Up to {data.employeeLimit} Employees
              </p>
            </div>

            <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-yellow-700 mb-3">
                Key Features:
              </h4>
              <ul className=" text-sm text-gray-700">
                {data.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <TiTickOutline className="text-blue-600" />

                    <span className="flex-1">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4">
              <button
                className="w-full py-2 rounded-lg text-lg font-semibold transition duration-200 
         
            ${data.name === 'Standard' ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}"
              >
                Choose {data.name}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Package;

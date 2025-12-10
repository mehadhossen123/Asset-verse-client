import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";

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
    <div className="grid grid-cols-3">
     
      {pakData.map((data, i) => (
       
          <div
            key={i}
            class="w-full max-w-sm mx-auto  bg-white rounded-xl shadow-2xl border-indigo-600 overflow-hidden transform hover:scale-[1.02] transition duration-300 ease-in-out border-2  
    "
          >
            <div
              class="p-4 text-center  bg-indigo-50
        "
            >
              <h3 class="text-3xl font-bold text-gray-800 tracking-tight">
                {data.name}
              </h3>

              {data.name === "Standard" && (
                <span class="inline-block bg-indigo-600 text-white text-xs font-semibold px-3 py-1 mt-2 rounded-full uppercase">
                  Most Popular
                </span>
              )}
            </div>

            <div class="px-4 pb-4 text-center">
              <p class="text-5xl font-extrabold text-gray-900">
                ${data.price}
                <span class="text-xl font-medium text-gray-500">/mo</span>
              </p>
              <p class="mt-2 text-sm text-gray-600">
                Up to {data.employeeLimit} Employees
              </p>
            </div>

            <div class="px-4 py-4 bg-gray-50 border-t border-gray-200">
              <h4 class="text-lg font-semibold text-gray-700 mb-3">
                Key Features:
              </h4>
              <ul class="space-y-3 text-sm text-gray-700">
                {data.features.map((feature, index) => (
                  <li key={index} class="flex items-start">

{/*                     
                    <span class="text-green-500 mr-3 mt-1">
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </span> */}


                    <span class="flex-1">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div class="p-4">
              <button
                class="w-full py-3 rounded-lg text-lg font-semibold transition duration-200 
         
            ${data.name === 'Standard' ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}"
              >
                Choose {data.name}
              </button>
            </div>
          </div>
      
      ))}
    </div>
  );
};

export default Package;

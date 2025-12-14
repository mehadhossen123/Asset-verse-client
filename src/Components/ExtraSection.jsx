import { motion } from 'framer-motion';
import React from 'react';
motion 

const ExtraSection = () => {
    return (
      <div className="bg-slate-900 py-24 px-10">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-white lg:text-5xl text-3xl text-center mb-5 "
          >
            How It Works{" "}
          </motion.h1>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 ">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
              {/* Icon */}
              <div className="bg-blue-100 text-blue-600 rounded-full p-4 mb-4">
                {/* Example: Use any icon here */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>

              {/* Step Number */}
              <p className="text-sm font-semibold text-gray-500 mb-1">Step 1</p>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2">Sign Up</h3>

              {/* Description */}
              <p className="text-gray-600">
                Create your account quickly and easily to start using our
                service.
              </p>
            </div>
            {/* card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
              {/* Icon */}
              <div className="bg-blue-100 text-blue-600 rounded-full p-4 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V7a2 2 0 012-2h5l2 2h5a2 2 0 012 2v10a2 2 0 01-2 2z"
                  />
                </svg>
              </div>

              {/* Step Number */}
              <p className="text-sm font-semibold text-gray-500 mb-1">Step 2</p>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2">Choose Plan</h3>

              {/* Description */}
              <p className="text-gray-600">
                Pick the plan that best suits your needs and start enjoying our
                service.
              </p>
            </div>
            {/* card 3  */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
              {/* Icon */}
              <div className="bg-green-100 text-green-600 rounded-full p-4 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              {/* Step Number */}
              <p className="text-sm font-semibold text-gray-500 mb-1">Step 3</p>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2">Start Using</h3>

              {/* Description */}
              <p className="text-gray-600">
                Begin using our service immediately and enjoy all the features
                seamlessly.
              </p>
            </div>
          </div>
        </div>
        {/* Question section a  */}
        <div>
          <motion.h1
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className=" text-3xl  text-white text-center   lg:text-5xl my-10"
          >
            All question about our AssetVerse{" "}
          </motion.h1>
          {/* Question one  */}
          <div className="flex  my-3 gap-5">
            <h1 className="text-3xl text-white ">
              What is AssetVerse used for?
            </h1>
            <button
              className="button"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Show ans
            </button>
          </div>
          {/* Question two  */}
          <div className="flex  gap-5 my-3">
            <h1 className="text-3xl text-white ">
              Is AssetVerse suitable for small and large teams?
            </h1>
            <button
              className="button"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              Show ans
            </button>
          </div>
          {/* Question  three  */}
          <div className="flex  gap-5 my-3">
            <h1 className="text-3xl text-white ">
              Is my company’s asset data secure in AssetVerse?
            </h1>
            <button
              className="button"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Show ans
            </button>
          </div>
        </div>
        {/* Modal one sho question  */}
        {/* Open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center text-yellow-700">
              AssetVerse
            </h3>
            <p className="py-4">
              AssetVerse helps organizations manage, track, and monitor their
              corporate assets efficiently from a single platform.
            </p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        {/* Modal two  */}
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center text-yellow-700">
              AssetVerse
            </h3>
            <p className="py-4">
              Yes, AssetVerse is designed to scale easily and works well for
              both small teams and large enterprises.
            </p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        {/* Modal three  */}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center text-yellow-700">
              AssetVerse
            </h3>
            <p className="py-4">
              Absolutely. AssetVerse uses secure authentication and data
              protection measures to ensure your asset information stays safe.
            </p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    );
};

export default ExtraSection;
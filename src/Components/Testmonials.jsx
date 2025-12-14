import React from "react";
import { FaCheckCircle, FaUsers, FaBoxOpen, FaClock } from "react-icons/fa";

const Testmonials = () => {
  const testimonials = [
    {
      name: "HR Manager, TechNova Solutions",
      message:
        "AssetVerse simplified our asset tracking process drastically. Managing employees and company assets is now effortless.",
    },
    {
      name: "Operations Lead, ByteCore Ltd.",
      message:
        "We reduced asset loss by over 40% within the first month. The dashboard is clean and easy to understand.",
    },
    {
      name: "Admin Officer, CloudAxis Inc.",
      message:
        "A powerful yet simple system. Our team adapted to AssetVerse in just a few days.",
    },
  ];

  const stats = [
    { icon: <FaUsers size={24} />, value: "100+", label: "Companies Trust Us" },
    { icon: <FaBoxOpen size={24} />, value: "5,000+", label: "Assets Managed" },
    {
      icon: <FaCheckCircle size={24} />,
      value: "2,000+",
      label: "Active Users",
    },
    { icon: <FaClock size={24} />, value: "99.9%", label: "Uptime Guarantee" },
  ];

  return (
    <section className="py-16 ">
      {/* Testimonials */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          What Our Clients Say
        </h2>
       
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <p className="mb-4">"{t.message}"</p>
                <p className="font-semibold">{t.name}</p>
              </div>
            ))}
          </div>
       
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto px-4 mt-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Our Impact
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center"
            >
              <div className="text-indigo-500 mb-3">{s.icon}</div>
              <h3 className="text-2xl font-bold">{s.value}</h3>
              <p className="text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Elements */}
      <div className="max-w-4xl mx-auto px-4 mt-16">
        <h2 className="text-3xl text-white font-bold text-center mb-8">
          Why You Can Trust Us
        </h2>
        <ul className="grid md:grid-cols-3 gap-6 text-white">
          <li className="flex items-center space-x-2">
            <FaCheckCircle className="text-green-500" /> Secure & Reliable
          </li>
          <li className="flex items-center space-x-2">
            <FaCheckCircle className="text-green-500" /> Role-Based Access
            Control
          </li>
          <li className="flex items-center space-x-2">
            <FaCheckCircle className="text-green-500" /> Cloud-Based Data
            Storage
          </li>
          <li className="flex items-center space-x-2">
            <FaCheckCircle className="text-green-500" /> Fast & Modern UI
          </li>
          <li className="flex items-center space-x-2">
            <FaCheckCircle className="text-green-500" /> 24/7 Support & Updates
          </li>
          <li className="flex items-center space-x-2">
            <FaCheckCircle className="text-green-500" /> GDPR-Friendly
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Testmonials;

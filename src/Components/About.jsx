import { motion } from "framer-motion";
import { FaBoxes, FaUsers, FaChartLine, FaShieldAlt } from "react-icons/fa";


const About = () => {
  const benefits = [
    {
      icon: <FaBoxes />,
      title: "Centralized Asset Tracking",
      desc: "Manage and monitor all corporate assets from a single unified platform.",
    },
    {
      icon: <FaUsers />,
      title: "Improved Workforce Productivity",
      desc: "Ensure employees have the right assets at the right time to work efficiently.",
    },
    {
      icon: <FaChartLine />,
      title: "Data-Driven Insights",
      desc: "Analyze asset usage and performance with real-time analytics.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure & Compliant",
      desc: "Maintain security and compliance with controlled access and audit logs.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      viewport={{ once: false }}
      className="py-20 bg-black"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-white">About AssetVerse</h2>
        <p className="mt-4 text-yellow-700 max-w-3xl mx-auto">
          AssetVerse is a corporate asset management solution designed to help
          organizations track, assign, and optimize assets with efficiency and
          control.
        </p>

        {/* Benefits Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl text-indigo-600 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;

import {
  FaBoxOpen,
  FaUserShield,
  FaClipboardCheck,
  FaChartBar,
  FaTools,
  FaLock,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaBoxOpen />,
      title: "Asset Assignment & Tracking",
      desc: "Assign assets to employees and track availability and usage in real time.",
    },
    {
      icon: <FaUserShield />,
      title: "Role-Based Access Control",
      desc: "Ensure secure access with permissions based on user roles and responsibilities.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Request & Approval System",
      desc: "Streamline asset requests with a structured approval workflow.",
    },
    {
      icon: <FaChartBar />,
      title: "Real-Time Analytics",
      desc: "Monitor asset utilization and performance through actionable insights.",
    },
    {
      icon: <FaTools />,
      title: "Maintenance Management",
      desc: "Track maintenance schedules and asset lifecycle efficiently.",
    },
    {
      icon: <FaLock />,
      title: "Audit Logs & Security",
      desc: "Maintain transparency and compliance with detailed activity logs.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Powerful Features
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            AssetVerse offers a comprehensive set of features to manage
            corporate assets efficiently and securely.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-6 border rounded-2xl hover:shadow-lg transition"
            >
              <div className="text-3xl text-indigo-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

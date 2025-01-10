// components/FeaturesSection.tsx
import { FaShieldAlt, FaChartLine, FaUserTie } from "react-icons/fa";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-blue-500 text-3xl" />,
      title: "Advisory",
      description:
        "We provide expert tax return filing and advisory services with a focus on accuracy, compliance, and timeliness.",
    },
    {
      icon: <FaChartLine className="text-blue-500 text-3xl" />,
      title: "Saving Money",
      description:
        "TAXROOF helps you maximize savings by identifying eligible deductions and optimizing your tax strategy.",
    },
    {
      icon: <FaUserTie className="text-blue-500 text-3xl" />,
      title: "Personal Expert Assisted",
      description:
        "Get personalized, expert-assisted tax solutions tailored to your unique financial needs with TAXROOF.",
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-12 transition-colors duration-300">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 text-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;

import Image from "next/image";

const MissionAndVisionSection: React.FC = () => {
  const visionPoints = [
    {
      title: "Trusted Financial Partner",
      description:
        "Recognized for our unwavering commitment to excellence, innovation, and client success.",
    },
    {
      title: "Delivering Excellence",
      description:
        "Ensuring quality in every aspect of our work, from audit and taxation to financial advisory and business consultation.",
    },
    {
      title: "Empowering Clients",
      description:
        "Providing knowledge, insights, and strategies to help clients make informed financial decisions.",
    },
    {
      title: "Enhancing Financial Well-being",
      description:
        "Supporting client growth through financial empowerment and strategic planning.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-teal-950 to-blue-950 py-12 transition-colors duration-300">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div>
          <Image
            src="/calculator.webp" // Replace with actual image path
            alt="Financial Strategy"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section */}
        <div className="ml-4">
          <h2 className="text-green-500 text-lg font-semibold mb-4">
            OUR MISSION AND VISION
          </h2>
          <ul className="space-y-4">
            {visionPoints.map((point, index) => (
              <li
                key={index}
                className="flex gap-4 hover:scale-105 transition-transform"
              >
                <span className="text-green-500 text-2xl">➔</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-300 dark:text-gray-400">
                    {point.title}
                  </h3>
                  <p className="text-gray-400 dark:text-gray-500 mt-1">
                    {point.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MissionAndVisionSection;

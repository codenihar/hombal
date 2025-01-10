import Image from "next/image";

const HomeLayout: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-teal-950 to-blue-950 text-white transition-colors duration-300">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 mb-8  gap-8">
        {/* Left Section */}
        <div className="lg:w-1/2 my-12">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={120}
            className="object-contain my-12"
          />
          <h2 className="text-green-300 text-lg font-semibold">
            EMPOWER YOUR BRAND
          </h2>
          <h1 className="text-4xl lg:text-5xl font-bold mt-4">
            Unlock the Secret of Tax Savings
          </h1>
          <p className="text-gray-300 dark:text-gray-400 text-lg mt-4">
            Our tax experts will help you discover every deduction and credit
            available to you, so you can save big on your taxes.
          </p>
          <button
            className="bg-green-400 text-blue-900 font-semibold px-6 py-3 rounded mt-6 hover:bg-green-500 dark:bg-green-500 dark:text-gray-900 transition"
            data-tally-open="waKZZZ"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
          >
            Know More
          </button>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2">
          <Image
            src="/team.webp" // Replace with the actual image path
            alt="Team of experts"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* New Section with Call-to-Action Button */}
      <div className="dark:bg-gray-900 py-12 transition-colors duration-300">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-150">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 mt-4">
            Join us today and take the first step towards maximizing your tax
            savings.
          </p>
          <a
            href="tel:+918097262227"
            className="text-blue-400 hover:text-blue-600"
          >
            <button className="mt-6 px-6 py-3 bg-teal-450 text-teal-950 rounded-lg hover:bg-gray-950 hover:text-teal-400 transition">
              Call us Now
            </button>
          </a>
        </div>
      </div>
      <script async src="https://tally.so/widgets/embed.js"></script>
    </div>
  );
};

export default HomeLayout;

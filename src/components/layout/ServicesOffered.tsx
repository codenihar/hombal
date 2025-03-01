"use client";
import React, { useState } from "react";

const services = [
  {
    title: "GST Returns",
    description: "Complete end-to-end services for Tax Professionals.",
  },
  {
    title: "Internal Audit",
    description:
      "We provide internal audit services basis on your requirements.",
  },
  {
    title: "ROC Compliances",
    description:
      "Efficient and compliant ROC services for hassle-free corporate compliance.",
  },
  {
    title: "Income Tax Filing",
    description: "Efficient and reliable Income Tax filing services.",
  },
  {
    title: "Expert Advice",
    description:
      "Our team will provide you with expert advice you need for departments queries.",
  },
  {
    title: "TDS / TCS Returns",
    description:
      "Comprehensive TDS and TCS returns filing services with accuracy and compliance.",
  },
  {
    title: "Business Consulting",
    description:
      "Expert business consulting services to help you grow and succeed.",
  },
  {
    title: "Financial Planning",
    description:
      "Comprehensive financial planning services to secure your future.",
  },
  {
    title: "Tax Advisory",
    description:
      "Professional tax advisory services to optimize your tax strategy.",
  },
];

const ServicesOffered: React.FC = () => {
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Services Offered
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See how our tailored solutions can boost your business. From
            planning to support, we provide the expertise to drive your success.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHighlightedIndex(index)}
              onMouseLeave={() => setHighlightedIndex(null)}
              className={`p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 ${
                highlightedIndex === index
                  ? "bg-blue-900 text-white"
                  : "bg-white dark:bg-gray-700"
              }`}
            >
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full mb-4 ${
                  highlightedIndex === index
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-300"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3
                className={`text-xl font-bold ${
                  highlightedIndex === index
                    ? "text-white"
                    : "text-gray-800 dark:text-white"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`mt-2 ${
                  highlightedIndex === index
                    ? "text-gray-200"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOffered;

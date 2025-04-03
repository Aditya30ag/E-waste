import React from "react";
import Navigation from "./Navigation";

export default function Services() {
  const services = [
    {
      title: "E-Waste Collection",
      description:
        "We provide doorstep e-waste collection services to ensure responsible disposal and recycling.",
      icon: "🗑️",
    },
    {
      title: "Device Refurbishing",
      description:
        "Extend the lifespan of your electronics by refurbishing and donating to those in need.",
      icon: "🔧",
    },
    {
      title: "Recycling Awareness",
      description:
        "Educational programs and resources to raise awareness about e-waste recycling.",
      icon: "📚",
    },
    {
      title: "Corporate E-Waste Solutions",
      description:
        "Customized e-waste management services for businesses and enterprises.",
      icon: "🏢",
    },
    {
      title: "Data Destruction",
      description:
        "Secure and certified data destruction for electronic devices before recycling.",
      icon: "🛡️",
    },
    {
      title: "Battery Disposal",
      description:
        "Safe disposal and recycling of old and damaged batteries to prevent pollution.",
      icon: "🔋",
    },
    {
      title: "Tech Buy-Back Program",
      description:
        "Exchange your old gadgets for discounts on new eco-friendly products.",
      icon: "💰",
    },
    {
      title: "Sustainable Product Design",
      description:
        "Guidance for companies on designing sustainable and recyclable electronics.",
      icon: "🌱",
    },
  ];

  return (
    <>
      <header className="bg-green-700 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            <h1 className="text-2xl font-bold">E-Waste Crisis Initiative</h1>
          </div>
          <Navigation />
        </div>
      </header>
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
          🌍 Our Services
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          We are committed to sustainable e-waste management. Explore our
          services to contribute to a cleaner and greener planet. ♻️
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-green-700">
            Join Our Mission 🌱
          </h3>
          <p className="text-gray-600 mb-4">
            Want to contribute to responsible e-waste management? Contact us to
            get started.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition">
            Get in Touch
          </button>
        </div>
      </section>
    </>
  );
}

import React from 'react';
import Navigation from './Navigation';

export default function Overview() {
  const stats = [
    { value: "50M", description: "Tons of e-waste generated annually", icon: "🌍" },
    { value: "17%", description: "Global recycling rate", icon: "♻️" },
    { value: "$62.5B", description: "Value of raw materials in e-waste", icon: "💰" },
    { value: "80%", description: "E-waste improperly disposed of", icon: "🚮" },
  ];

  return (
    <>
    <header className="bg-green-700 text-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <h1 className="text-2xl font-bold">E-Waste Crisis Initiative</h1>
              </div>
              <Navigation />
            </div>
          </header>
    <section className="container mx-auto px-4 py-12 text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-6">🌎 E-Waste Overview</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        E-waste is one of the fastest-growing waste streams in the world. Let's take a look at some shocking facts! 🔍
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center transform hover:scale-105 transition"
          >
            <div className="text-5xl mb-4">{stat.icon}</div>
            <h3 className="text-2xl font-bold text-green-700">{stat.value}</h3>
            <p className="text-gray-600">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

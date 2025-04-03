// DropoffMap.js
import React, { useState } from 'react';

const DropoffMap = () => {
  const [location, setLocation] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  
  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    // Simulating search delay
    setTimeout(() => setIsSearching(false), 1500);
  };
  
  return (
    <div className="w-full">
      <form onSubmit={handleSearch} className="flex mb-4">
        <input
          type="text"
          className="flex-grow border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter your location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-md transition duration-200"
          disabled={isSearching}
        >
          {isSearching ? 'Searching...' : 'Search'}
        </button>
      </form>
      
      <div className="bg-gray-200 rounded-md w-full h-64 flex items-center justify-center">
        <div className="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <p className="text-gray-500">
            {location ? 'Showing e-waste collection points near ' + location : 'Enter your location to see collection points'}
          </p>
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-md shadow border-l-4 border-green-500">
          <h3 className="font-bold">City Recycling Center</h3>
          <p className="text-gray-600 text-sm">123 Green Street, Downtown</p>
          <p className="text-gray-500 text-sm mt-1">Open Mon-Sat: 9AM-5PM</p>
          <div className="mt-2 flex justify-between">
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Certified</span>
            <a href="#" className="text-green-600 text-sm hover:text-green-800">Get Directions</a>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md shadow border-l-4 border-green-500">
          <h3 className="font-bold">Tech Solutions Dropoff</h3>
          <p className="text-gray-600 text-sm">456 Circuit Avenue, Westside</p>
          <p className="text-gray-500 text-sm mt-1">Open Mon-Fri: 8AM-7PM</p>
          <div className="mt-2 flex justify-between">
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Certified</span>
            <a href="#" className="text-green-600 text-sm hover:text-green-800">Get Directions</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropoffMap;
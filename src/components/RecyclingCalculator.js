// RecyclingCalculator.js
import React, { useState } from 'react';

const RecyclingCalculator = () => {
  const [deviceType, setDeviceType] = useState('smartphone');
  const [quantity, setQuantity] = useState(1);
  const [results, setResults] = useState(null);
  
  const calculateImpact = (e) => {
    e.preventDefault();
    
    // Impact values based on device type (simplified for demonstration)
    const impactData = {
      smartphone: {
        co2Saved: 60, // kg
        waterSaved: 13000, // liters
        materialsRecovered: 0.03 // kg
      },
      laptop: {
        co2Saved: 270,
        waterSaved: 49000,
        materialsRecovered: 0.5
      },
      desktop: {
        co2Saved: 350,
        waterSaved: 65000,
        materialsRecovered: 0.9
      },
      tablet: {
        co2Saved: 100,
        waterSaved: 19000,
        materialsRecovered: 0.1
      },
      printer: {co2Saved: 130,
        waterSaved: 28000,
        materialsRecovered: 0.4
      },
      tv: {
        co2Saved: 240,
        waterSaved: 45000,
        materialsRecovered: 0.7
      }
    };
    
    // Calculate impact based on quantity
    const impact = impactData[deviceType];
    setResults({
      co2Saved: (impact.co2Saved * quantity).toFixed(1),
      waterSaved: (impact.waterSaved * quantity).toFixed(0),
      materialsRecovered: (impact.materialsRecovered * quantity).toFixed(2),
      treesEquivalent: ((impact.co2Saved * quantity) / 20).toFixed(1)
    });
  };
  
  return (
    <div className="w-full">
      <form onSubmit={calculateImpact} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Device Type</label>
          <select
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={deviceType}
            onChange={(e) => setDeviceType(e.target.value)}
          >
            <option value="smartphone">Smartphone</option>
            <option value="laptop">Laptop</option>
            <option value="desktop">Desktop Computer</option>
            <option value="tablet">Tablet</option>
            <option value="printer">Printer</option>
            <option value="tv">Television</option>
          </select>
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">Quantity</label>
          <input
            type="number"
            min="1"
            max="100"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition duration-200"
        >
          Calculate Environmental Impact
        </button>
      </form>
      
      {results && (
        <div className="mt-6 bg-green-50 p-4 rounded-md">
          <h3 className="font-bold text-green-800 mb-2">Your Recycling Impact:</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>CO₂ Emissions Avoided:</span>
              <span className="font-semibold">{results.co2Saved} kg</span>
            </li>
            <li className="flex justify-between">
              <span>Water Saved:</span>
              <span className="font-semibold">{results.waterSaved} liters</span>
            </li>
            <li className="flex justify-between">
              <span>Materials Recovered:</span>
              <span className="font-semibold">{results.materialsRecovered} kg</span>
            </li>
            <li className="flex justify-between">
              <span>Equivalent to Trees Planted:</span>
              <span className="font-semibold">{results.treesEquivalent} trees</span>
            </li>
          </ul>
          <div className="mt-4 text-sm text-gray-600">
            Properly recycling electronics helps reduce environmental impact and conserves natural resources.
          </div>
        </div>
      )}
    </div>
  );
};

export default RecyclingCalculator;

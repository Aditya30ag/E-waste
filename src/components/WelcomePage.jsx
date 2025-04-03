import { Link } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to E-Waste Crisis Initiative</h1>
        <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
          Transforming E-Waste into Opportunities for a Sustainable Future
        </p>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-3xl font-bold text-green-700 mb-2">53.6 Million</h3>
            <p className="text-gray-600">Metric tons of e-waste generated globally in 2019</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-3xl font-bold text-green-700 mb-2">Only 17.4%</h3>
            <p className="text-gray-600">Of e-waste was properly recycled in 2019</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-3xl font-bold text-green-700 mb-2">$57 Billion</h3>
            <p className="text-gray-600">Value of raw materials discarded in e-waste annually</p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-12 text-center">
            The E-Waste Crisis Initiative is dedicated to raising awareness about the growing 
            environmental threat posed by electronic waste. We connect individuals, businesses, 
            and recycling centers to create a circular economy for electronics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">♻️</div>
              <h4 className="text-xl font-semibold mb-2 text-green-700">Recycling Locator</h4>
              <p className="text-gray-600">Find certified e-waste recycling centers near you</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-xl font-semibold mb-2 text-green-700">Impact Tracking</h4>
              <p className="text-gray-600">Measure your personal or organizational e-waste reduction</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🎓</div>
              <h4 className="text-xl font-semibold mb-2 text-green-700">Education Hub</h4>
              <p className="text-gray-600">Learn about proper e-waste disposal and its importance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Join the Movement Today</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Create an account to track your e-waste contributions, find recycling centers, 
          and connect with our sustainability community.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <Link 
            to="/login" 
            className="px-8 py-3 bg-green-700 text-white font-medium rounded-full hover:bg-green-800 transition-colors shadow-md hover:shadow-lg"
          >
            Login
          </Link>
          <Link 
            to="/signup" 
            className="px-8 py-3 border-2 border-green-700 text-green-700 font-medium rounded-full hover:bg-green-50 transition-colors"
          >
            Sign Up
          </Link>
        </div>

        <p className="text-gray-600">
          Or continue as <Link to="/dashboard" className="text-green-700 font-medium hover:underline">guest</Link> to explore our resources
        </p>
      </div>
    </div>
  );
}
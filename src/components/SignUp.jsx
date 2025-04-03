import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    organizationName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to create account
    console.log("Signup attempt:", formData);
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // For now, we'll just simulate successful signup
    navigate("/dashboard");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg border border-green-200">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Register Facility</h2>
        
        <div className="flex justify-center mb-6">
          <div className="p-2 bg-green-100 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
        </div>

        <p className="text-center text-gray-600 mb-6">Create an account to manage your e-waste collection services</p>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Your Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium">Organization Name</label>
            <input
              type="text"
              name="organizationName"
              placeholder="Your Company or Facility"
              value={formData.organizationName}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Work Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
          </div>
          
          <div className="flex items-center">
            <input type="checkbox" id="terms" className="h-4 w-4 text-green-600" required />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              I agree to the <Link to="/terms" className="text-green-700 hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-green-700 hover:underline">Privacy Policy</Link>
            </label>
          </div>
          
          <button 
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-md font-medium hover:bg-green-800 transition duration-200 shadow-md"
          >
            Register Account
          </button>
        </form>
        
        <p className="text-center text-gray-600 mt-4">
          Already registered? <Link to="/login" className="text-green-700 font-medium hover:underline">Login</Link>
        </p>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-center text-gray-500">
            By registering, you're joining our network of certified e-waste management facilities committed to responsible electronics recycling
          </p>
        </div>
      </div>
    </div>
  );
}
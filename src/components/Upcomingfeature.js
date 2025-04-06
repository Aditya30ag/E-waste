import { Link } from 'react-router-dom';

export function ComingSoonFeature() {
  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image placeholder */}
          <div className="w-full md:w-2/5 bg-white p-6 rounded-lg shadow-md">
            <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-md overflow-hidden flex items-center justify-center">
              <div className="text-6xl">🔍📱</div>
            </div>
            <div className="mt-4 text-center text-sm text-gray-500">AI-powered E-Waste Detection (Coming Soon)</div>
          </div>
          
          {/* Feature description */}
          <div className="w-full md:w-3/5">
            <div className="inline-block px-4 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-4">
              Coming Soon
            </div>
            <h2 className="text-3xl font-bold text-green-700 mb-4">AI-Powered E-Waste Detection</h2>
            <p className="text-gray-700 mb-6">
              We're developing an innovative feature that uses artificial intelligence to identify 
              electronic waste in your photos. Simply upload an image, and our AI will:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="mr-2 text-green-600">✓</span>
                <span>Identify electronic devices and components</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600">✓</span>
                <span>Provide recycling guidelines specific to the detected items</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600">✓</span>
                <span>Estimate environmental impact if recycled properly</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600">✓</span>
                <span>Connect you with nearby facilities that accept those specific items</span>
              </li>
            </ul>
            <div>
              <Link 
                to="/notify-me" 
                className="px-6 py-2 bg-green-700 text-white font-medium rounded-md hover:bg-green-800 transition-colors shadow-sm inline-flex items-center"
              >
                <span>Get notified when launched</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
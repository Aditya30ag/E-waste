// TestimonialCarousel.js
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Environmental Advocate",
    quote: "The E-Waste Crisis Initiative has transformed how our community approaches electronic recycling. Their platform makes it incredibly easy to responsibly dispose of devices.",
    image: "/api/placeholder/80/80"
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "IT Manager, TechCorp",
    quote: "As a company that replaces hundreds of devices yearly, having a streamlined process for proper e-waste disposal has been invaluable. The tracking system helps us meet our sustainability goals.",
    image: "/api/placeholder/80/80"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    title: "School District Coordinator",
    quote: "The educational resources provided by this initiative have been exceptional. Our students are now leading the charge in e-waste collection drives throughout the district.",
    image: "/api/placeholder/80/80"
  }
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-8">
        <div className="max-w-3xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`transition-opacity duration-500 ${index === activeIndex ? 'block opacity-100' : 'hidden opacity-0'}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4" 
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <blockquote className="mt-4 text-xl italic text-gray-700">"{testimonial.quote}"</blockquote>
                <div className="mt-4">
                  <cite className="font-bold text-lg not-italic">{testimonial.name}</cite>
                  <p className="text-green-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === activeIndex ? 'bg-green-600' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
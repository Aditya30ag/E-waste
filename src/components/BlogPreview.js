// BlogPreview.js
import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "The Hidden Environmental Cost of Smartphones",
    excerpt: "Each smartphone requires mining rare minerals and produces significant carbon emissions during manufacturing...",
    date: "April 2, 2025",
    author: "Dr. Emily Chen",
    category: "Education",
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "Innovative Solutions for E-Waste Management in 2025",
    excerpt: "New technologies are transforming how we process electronic waste, from automated sorting to advanced material recovery...",
    date: "March 28, 2025",
    author: "James Wilson",
    category: "Innovation",
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Success Story: How One City Reduced E-Waste by 60%",
    excerpt: "Through community engagement and strategic partnerships, Greenville implemented a comprehensive e-waste program...",
    date: "March 24, 2025",
    author: "Maria Gonzalez",
    category: "Case Study",
    image: "/api/placeholder/400/250"
  }
];

const BlogPreview = () => {
  return (
    <>
      {blogPosts.map(post => (
        <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center mb-2">
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                {post.category}
              </span>
              <span className="text-gray-500 text-xs ml-2">{post.date}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">By {post.author}</span>
              <a href={`/blog/${post.id}`} className="text-green-600 hover:text-green-700 font-medium">Read More →</a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogPreview;
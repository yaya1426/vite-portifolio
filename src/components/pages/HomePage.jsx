import React from 'react';
import Header from '../Header';

const HomePage = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive and modern websites using the latest technologies like React.js and Tailwind CSS.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with a focus on user experience and accessibility.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      title: "Performance Optimization",
      description: "Improving website speed and performance through code optimization and best practices.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Responsive Design",
      description: "Ensuring your website looks and functions perfectly on all devices and screen sizes.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <Header 
        title="Welcome to My Portfolio" 
        subtitle="Frontend Developer & UI/UX Designer" 
      />
      <main className="py-8">
        <section className="bg-white shadow rounded p-6 mb-12">
          <h2 className="text-xl font-semibold">Featured Projects</h2>
          <ul className="list-disc pl-5 mt-4">
            <li>Project A</li>
            <li>Project B</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Services I Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage; 
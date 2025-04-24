import React from 'react';
import Header from '../Header';

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <Header title="About Me" />
      <main className="py-8">
        <section className="bg-white shadow rounded p-6">
          <p className="text-gray-700 leading-relaxed">
            I am a frontend developer with a passion for design and interactivity. 
            I enjoy building beautiful and functional web experiences.
          </p>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>HTML5 & CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>Responsive Design</li>
              <li>UI/UX Design Principles</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage; 
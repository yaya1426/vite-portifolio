import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation onPageChange={setCurrentPage} currentPage={currentPage} />
      {renderPage()}
    </div>
  );
}

export default App;

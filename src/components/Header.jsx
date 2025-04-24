import React from 'react';

const Header = ({ title, subtitle }) => {
  return (
    <header className="text-center my-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
    </header>
  );
};

export default Header; 
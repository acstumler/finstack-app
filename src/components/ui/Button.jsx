// src/components/ui/Button.jsx
import React from 'react';

const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-md transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

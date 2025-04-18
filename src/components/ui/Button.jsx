// src/components/ui/Button.jsx
import React from 'react';

const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      {...props}
      className={`bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

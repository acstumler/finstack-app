import React from 'react';

const Button = ({ children, onClick, type = 'button', style = {}, ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        backgroundColor: '#D34D1F',
        color: '#fff',
        padding: '0.6rem 1.2rem',
        fontSize: '1rem',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease-in-out',
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

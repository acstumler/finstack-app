// src/components/ui/Button.jsx
import React from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button
      style={{
        background: '#d44b23',
        color: 'white',
        padding: '0.6rem 1.2rem',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 600,
        ...props.style,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

// src/components/ui/Input.jsx
import React from 'react';

const Input = ({ type = 'text', placeholder, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={{
        width: '100%',
        padding: '0.6rem 1rem',
        fontSize: '1rem',
        border: '1px solid #ccc',
        borderRadius: '8px',
        marginBottom: '1rem',
        ...props.style,
      }}
      {...props}
    />
  );
};

export default Input;

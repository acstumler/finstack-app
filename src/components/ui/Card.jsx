// src/components/ui/Card.jsx
import React from 'react';

const Card = ({ title, children }) => {
  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      marginBottom: '1.5rem',
    }}>
      {title && <h3 style={{ marginBottom: '1rem' }}>{title}</h3>}
      {children}
    </div>
  );
};

export default Card;

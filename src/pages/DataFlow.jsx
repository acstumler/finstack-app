import React, { useState } from 'react';
import { PlaidLink } from 'react-plaid-link';  // Import PlaidLink

const DataFlow = () => {
  const [publicToken, setPublicToken] = useState(null);
  const [status, setStatus] = useState('');  // Track success or failure status

  // This function is called when Plaid Link is successful
  const onSuccess = (public_token) => {
    setPublicToken(public_token);
    setStatus('Linking Successful!');

    // Send public token to the backend serverless function to get access token and transactions
    fetch('/api/plaid', {
      method: 'POST',
      body: JSON.stringify({ public_token }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then(data => {
        console.log('Plaid Data received:', data);
        // Use the received data to display transactions or link to dashboards
      })
      .catch((error) => {
        console.error('Error linking bank account:', error);
        setStatus('Error linking account.');
      });
  };

  return (
    <div className="container">
      <h2 className="text-3xl font-semibold">Data Flow</h2>
      <p>Link your bank account to sync your financial data with FinStack.</p>

      {/* Plaid Link Button */}
      <PlaidLink
        clientName="FinStack"
        env="sandbox"  // Use 'production' for live apps
        product={['transactions']}
        publicKey="PLAID_PUBLIC_KEY"  // Replace with your actual Plaid public key
        onSuccess={onSuccess}
      >
        Link Your Bank Account
      </PlaidLink>

      {/* Display status message */}
      {publicToken && <p>{status}</p>}
    </div>
  );
};

export default DataFlow;

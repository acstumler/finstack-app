import React, { useState } from 'react';
import { PlaidLink } from 'react-plaid-link'; // Import PlaidLink component

const DataFlow = () => {
  const [publicToken, setPublicToken] = useState(null);
  const [status, setStatus] = useState('');  // Track success or failure

  // This function is called when the Plaid Link completes successfully
  const onSuccess = (public_token) => {
    setPublicToken(public_token); // Store the public token from Plaid
    setStatus('Linking Successful!');

    // Send public token to the backend to exchange it for an access token and fetch transactions
    fetch('/api/plaid', {
      method: 'POST',
      body: JSON.stringify({ public_token }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then(data => {
        console.log('Data received from Plaid:', data);
        // Process and display the received data (transactions, etc.)
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
        clientName="FinStack"  // Your app's name
        env="sandbox"  // Use 'production' for live apps
        product={['transactions']}  // Enable the Transactions product
        publicKey="PLAID_PUBLIC_KEY"  // Replace with your actual Plaid public key
        onSuccess={onSuccess}  // Trigger onSuccess when Plaid Link completes
      >
        Link Your Bank Account
      </PlaidLink>

      {/* Status Message */}
      {publicToken && <p>{status}</p>}
    </div>
  );
};

export default DataFlow;

// Import required modules
require('dotenv').config();  // Load environment variables from the .env file
const express = require('express');
const plaid = require('plaid');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize the Express app
const app = express();

// Middleware for CORS and parsing JSON
app.use(cors());
app.use(bodyParser.json());

// Plaid client setup using environment variables from .env
const client = new plaid.Client({
  clientID: process.env.PLAID_CLIENT_ID,  // From your .env file
  secret: process.env.PLAID_SECRET,  // From your .env file
  env: plaid.environments.sandbox,  // Use sandbox environment (change to 'development' or 'production' as needed)
  options: {
    version: '2019-05-29',  // Optional: specify your desired API version
  },
});

// Create an endpoint to generate a Plaid link token (for frontend)
app.post('/create_link_token', async (req, res) => {
  try {
    const response = await client.createLinkToken({
      user: {
        client_user_id: 'user-id',  // You can generate or store this user ID as needed
      },
      client_name: 'FinStack',
      products: ['auth', 'transactions'],  // Specify products you need, e.g., 'auth', 'transactions', etc.
      country_codes: ['US'],
      language: 'en',
    });
    res.json(response);
  } catch (error) {
    console.error('Error creating link token:', error);
    res.status(500).json({ error: 'Failed to create link token' });
  }
});

// Endpoint to exchange public token for an access token (for backend usage)
app.post('/exchange_public_token', async (req, res) => {
  const { public_token } = req.body;  // Expecting the public_token sent from the frontend

  try {
    const exchangeResponse = await client.exchangePublicToken(public_token);
    const accessToken = exchangeResponse.access_token;
    const itemId = exchangeResponse.item_id;
    
    // You can now store the access token and item ID in your database for future use.
    res.json({ access_token: accessToken, item_id: itemId });
  } catch (error) {
    console.error('Error exchanging public token:', error);
    res.status(500).json({ error: 'Failed to exchange public token' });
  }
});

// Endpoint to fetch transaction data using the access token
app.post('/get_transactions', async (req, res) => {
  const { access_token, start_date, end_date } = req.body;  // Expecting access_token, start_date, and end_date in the request body

  try {
    const transactionsResponse = await client.getTransactions(
      access_token,  // The Plaid access token
      start_date,    // Start date for the transaction history
      end_date,      // End date for the transaction history
      { count: 250, offset: 0 }  // Adjust the count and offset if needed
    );
    
    res.json(transactionsResponse);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
});

// Start the server (Make sure to adjust the port if needed)
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

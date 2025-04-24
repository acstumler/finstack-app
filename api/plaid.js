const plaid = require('plaid');

// Initialize Plaid client with credentials from environment variables
const client = new plaid.Client({
  clientID: process.env.PLAID_CLIENT_ID,
  secret: process.env.PLAID_SECRET,
  env: plaid.environments.sandbox,  // Use 'production' in live apps
});

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { public_token } = req.body;  // Get the public token from frontend

    try {
      // Exchange the public token for an access token
      const tokenResponse = await client.exchangePublicToken(public_token);
      const accessToken = tokenResponse.access_token;
      const itemId = tokenResponse.item_id;

      // Fetch transactions using the access token
      const transactions = await client.getTransactions(accessToken, '2022-01-01', '2022-12-31', {
        count: 250,
        offset: 0,
      });

      // Send the access token and transactions back to frontend
      res.status(200).json({ accessToken, itemId, transactions: transactions.transactions });
    } catch (error) {
      console.error('Error connecting to Plaid:', error);
      res.status(500).json({ error: 'Failed to exchange token or fetch transactions.' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });  // Only allow POST requests
  }
};

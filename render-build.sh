#!/usr/bin/env bash
# exit on error
set -o errexit

# Set Node version
. $HOME/.nvm/nvm.sh
nvm install 18
nvm use 18

# Install dependencies
npm install --legacy-peer-deps

# Build the application
npm run build

# Create a simple server.js for production
cat > server.js << 'EOL'
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 10000;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
EOL

# Install express if not already present
if ! grep -q "express" package.json; then
  npm install express --save
fi

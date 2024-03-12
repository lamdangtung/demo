const express = require('express');
const app = express();
const path = require('path');

// Serve assetlinks.json from .well-known directory
app.get('/.well-known/assetlinks.json', (req, res) => {
    res.sendFile(path.join(__dirname, '.well-known', 'assetlinks.json'));
});

// Serve assetlinks.json from .well-known directory
app.get('/.well-known/apple-app-site-association', (req, res) => {
    res.sendFile(path.join(__dirname, '.well-known', 'apple-app-site-association'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
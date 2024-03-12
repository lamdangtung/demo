const express = require('express');
const app = express();
const path = require('path');

// Middleware to parse JSON in requests
app.use(express.json());
// Start the server
const PORT = process.env.PORT || 3000;
// Serve assetlinks.json from .well-known directory
app.get('/.well-known/assetlinks.json', (req, res) => {
    res.sendFile(path.join(__dirname, '.well-known', 'assetlinks.json'));
});



// Endpoint handling GET requests to the root path
app.get('/', (req, res) => {
    const originalUrl = req.url;
    const newBaseUrl = 'xg-alphaz://link';
    const redirectTo = newBaseUrl + originalUrl;
    console.log(redirectTo);
    // Redirect to the new link
    res.redirect(redirectTo);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Serve assetlinks.json from .well-known directory
app.get('/.well-known/apple-app-site-association', (req, res) => {
    res.sendFile(path.join(__dirname, '.well-known', 'apple-app-site-association'));
});



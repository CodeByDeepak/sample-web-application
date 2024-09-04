
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello from the web application!');
});

// Define another route
app.get('/about', (req, res) => {
    res.send('This is the about page.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

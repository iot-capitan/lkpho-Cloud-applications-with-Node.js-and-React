// import express.js library
const express = require('express');

//Create instace of an express app
const app = express();

// Define the port number
const port = 8080;

//Route to handle requests to the root path '/'
app.get('/', (req,res) =>{
    return res.send("Hello World!");
});

// Create another route to handle requests to '/api'
app.get('/api', (req,res) =>{
    return res.json({firstname: "John", lastname: "Doe"});
});


// Start the server
app.listen(port, () => {
    console.log('Listening at http://localhost:' + port);
});




// configure environment vars
require('dotenv').config();

// setup express server
const express = require('express');
const app = express();

// setup routes
app.get('/', (req, res) => {
  res.send('Hello Express');
});

// setup port and listen to it
const PORT = process.env.PORT || 3000;
app.listen(PORT);
// Create server with Express
const express = require('express');
const app = express();

//Creating route
app.get('/', (req,res) => {
  res.send('<h1>Hi Imtiaz Ahmed</h1>')
});

app.get('/about', (req,res) => {
  res.json({
    name: "Anika"
  });
});

app.listen('8080', () => console.log('Server is Running at port 8080'));
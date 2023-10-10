// Create server with Express
const express = require('express');
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())


// Introducing Middleware
app.use((req, res, next) => {
  console.log(req.method);
  console.log(req.protocol);
  console.log(req.get('host'));
  console.log(req.originalUrl);

  next();
})


//Creating route
app.get('/', (req,res, next) => {
  res.send('<h1>Hi Imtiaz Ahmed</h1>')
});

app.get('/about', (req,res) => {
  res.json({
    name: "Anika"
  });
});

app.post('/login', (req,res) => {
  console.log(req.body.email);
  console.log(req.body.password);

  res.send("User Login Successfully");
})

app.listen('8080', () => console.log('Server is Running at port 8080'));
// Import express and path modules
const express = require('express');


// const path = require('path');

// Create a new express application
const app = express();

// Define the port our server will run on
const PORT = 3000;

// Serve static files from the dist folder
 app.use(express.static('public'));

// Serve static files from the dist folder
  //app.use(express.static(path.join(__dirname, '../client/dist')));

const root = require('path').join(__dirname,'../client','dist');
app.use(express.static(root));

app.get('/', (req, res) => {
  res.sendFile('index.html', {root});

});
//defines the routes of the servers
 app.get('/test', (req, res)=>{
     res.send("Server is operational!")
 });

// Define the route for serving index.html
app.get('/message', (req, res) => {
  
  //sends back a response to the client
    res.send("Hello from our server");
});


//  app.post('/api',(req, res)=>{
//      res.send("Received post request!")
//  });

//runs the server to listen at the port defined

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
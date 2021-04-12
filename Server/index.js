const dotenv= require('dotenv');
dotenv.config();
const path = require('path')
// General imports 
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const db = require("./DB");
const app = express();
const moviesRouter = require('./routes/movie-router')


const PORT = process.env.PORT || 8080;
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (req, res)=>{
      res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
db.on('error', (err)=>{console.log(err)})
app.listen(PORT, () => {
  console.log(`MERN app is connected to server on server on port: ${PORT}`);
});



app.use('/movies', moviesRouter)


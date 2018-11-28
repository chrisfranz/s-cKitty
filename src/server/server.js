const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

const eventController = require('./controllers/eventController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


app.get('/kitties', (req, res) => {
  res.status(200);
  res.send('here are my kitties')
})

app.get('/cat', (req, res) => {
  res.status(200);
  res.send('here is a cat')
})

app.post('/newCat',
  eventController.addCat, 
  (req, res) => {
  
})



app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server listening or Port:${PORT} ...`)
})

module.exports = server;
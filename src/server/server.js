const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

const eventController = require('./controllers/eventController');
const database = 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


// app.get('/kitties', (req, res) => {
//   res.status(200);
//   res.send('here are my kitties')
// })

app.get('/cat', eventController.getCat, (req, res) => {
  res.end();
})

app.post('/newCat',
  eventController.addCat, 
  (req, res) => {
    res.end();
  })

app.delete('/killCat',
  eventController.deleteCat,
  (req, res) => {
    res.end();
  })



app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server listening or Port:${PORT} ...`)
})

// module.exports = server;
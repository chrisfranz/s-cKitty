
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

const eventController = require('./controllers/eventController');
const database = 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// serves all data for all cats
app.get('/cat', 
  eventController.getCat, 
  (req, res) => {
    res.end();
  })
// serves image_url for all cats
app.get('/catPic', 
  eventController.getCatPic,
  (req, res) => {
    res.end();
  })
// creates a new cat THIS IS CURRENTLY HARD-CODED, MAKE IT DRY
app.post('/newCat',
  eventController.addCat, 
  (req, res) => {
    res.end();
  })
// deletes cat by ID number, UPDATE THIS TO CARRY THE ID OF CAT SELECTED BY CLIENT
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
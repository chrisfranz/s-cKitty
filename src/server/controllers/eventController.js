const db = require('../models/database');

const eventController = {

  addCat(req, res, next) {
    db.query(
      "INSERT INTO kitties (id, cat_name, image_url, gen, created_at, is_match) VALUES (1226276, 'Kiisu Fuzzybutt', 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1226276.svg', 25, '2018-11-28T07:14:36.000Z', false)" 
      )
      .then(response => res.send(response))
      .then(next())
      .catch((err) => console.log(err));
  },

  getCat(req, res, next) {
    db.query(
      "SELECT * FROM kitties"
      )
      .then(response => res.send(response))

      .catch(err => res.send(err));
  },

  deleteCat(req, res, next) {
    db.query(
      "DELETE FROM kitties WHERE kitties._id=5"
    )
    .then(response => res.send(response))
    .then(next())
    .catch()
  }
}





module.exports = eventController;
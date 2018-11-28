const db = require('../models/database');

const eventController = {

  addCat(req, res, next) {
    db.query(
      "INSERT INTO kitties (id, cat_name, image_url, gen, created_at, is_match) VALUES (1226274, 'Kotka Grimmwhoopsie', 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1226274.svg', 9, '2018-11-28T07:13:33.000Z', false)" 
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

  getCatPic(req, res, next) {
    db.query(
      "SELECT image_url FROM kitties"
      )
      .then(response => {
        console.log(response)
        res.status(200)
        res.send(response)
      })
      .catch(err => res.send(err));
  },

  toggleMatch(req, res, next) {
    db.query(

    )
    .then(response => {
      console.log(response)
      res.status(200)
      res.send(response)
    })
    .catch(err => res.send(err));
  }

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
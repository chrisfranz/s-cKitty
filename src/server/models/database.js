var pgp = require('pg-promise')(/*options*/)

const db = {};
const uri = 'postgres://lqsuaaon:NDXDmFjEvlGv3Y4pn5FQ3M3woeMbUMEe@elmer.db.elephantsql.com:5432/lqsuaaon';

pgp.connect(uri, (err, db_) => {
  if (err) throw new Error(err);
  db.conn = db_;
  console.log(db)
});

module.exports = db;
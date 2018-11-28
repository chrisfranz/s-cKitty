var pgp = require('pg-promise')(/*options*/)
var db = pgp('postgres://lqsuaaon:NDXDmFjEvlGv3Y4pn5FQ3M3woeMbUMEe@elmer.db.elephantsql.com:5432/lqsuaaon')

module.exports = db;
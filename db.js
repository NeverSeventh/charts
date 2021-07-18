const {Pool} = require('pg');




module.exports = new Pool({
  user: "uewssogjuxzcnk",
  host: 'ec2-52-19-170-215.eu-west-1.compute.amazonaws.com',
  database: 'df2i0dk03bono2',
  password: 'bb860b34ad1b14b3c40c002fb18ec5cdc82f63b903327657bdb7a475b2ae39d9',
  port: 5432,
  idleTimeoutMillis:0,
  ssl: {
    rejectUnauthorized: false
  },
})
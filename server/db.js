const {Pool} = require('pg');




module.exports = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Chart',
  password: 'root',
  port: 5432,
  idleTimeoutMillis:0,
})
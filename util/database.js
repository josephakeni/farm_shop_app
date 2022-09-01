require('dotenv').config();
const mysql = require('mysql2');

// Connect to MySQL Database
const password = process.env.MYSQL_ROOT_PASSWORD;
const database = process.env.MYSQL_DATABASE;
const host = 'localhost';
const user = 'jotonia';
const port = process.env.MYSQL_PORT;

const pool = mysql.createPool({
  connectionLimit: 5,
  host: host,
  user: user,
  password: password,
  database: database,
  port: port
});

pool.getConnection(function (err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server ==>.');
});

module.exports = pool.promise();
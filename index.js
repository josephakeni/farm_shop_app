const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
require('dotenv').config();
let mysql = require('mysql2');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

// Connect to MySQL Database
const PORT = process.env.APP_PORT;
const password = process.env.MYSQL_ROOT_PASSWORD;
const database = process.env.MYSQL_DATABASE;
const host = 'localhost';
const user = 'jotonia';
const port = process.env.MYSQL_PORT;

var pool = mysql.createPool({
    connectionLimit: 5,
    host: host,
    user: user,
    password: password, 
    database: database,
    port: port
});

pool.getConnection(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server ==>.');
  });
  
// Route traffic and filtering
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// Add 404 Error Page
app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
});

app.listen(PORT, ()=>{
    console.log(`Server started on http://localhost:${PORT}`)
});
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
require('dotenv').config();
let mysql = require('mysql2');


router.get('/add-product', function(req, res){
    // res.send("");
    res.send('<h1>Hello from add-product page!!! </h1><form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
 });

 router.post('/product', (req, res)=> {
    console.log(req.body);
    res.redirect('/');
 });

module.exports = router;


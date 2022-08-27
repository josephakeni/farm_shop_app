const path = require('path')
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
require('dotenv').config();
let mysql = require('mysql2');

const rootDir = require('../util/path');
const { route } = require('./shop');

const products = [];

// /admin/add-pproduct => GET
router.get('/add-product', function(req, res){
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
 });

 // /admin/add-pproduct => POST
 router.post('/add-product', (req, res)=> {
   //  console.log(req.body);
   products.push({title: req.body.title});
    res.redirect('/');
 });

exports.routes = router;
exports.products = products;


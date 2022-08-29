const path = require('path')
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
require('dotenv').config();
let mysql = require('mysql2');

const productsController = require('../controllers/products');
// const { route } = require('./shop');


// /admin/add-pproduct => GET
router.get('/add-product', productsController.getAddProduct);

 // /admin/add-pproduct => POST
 router.post('/add-product', productsController.postAddProduct);

module.exports = router;


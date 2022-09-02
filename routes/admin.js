const path = require('path')
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
require('dotenv').config();
let mysql = require('mysql2');

const adminController = require('../controllers/admin');
// const { route } = require('./shop');


// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/product => GET
router.get('/products', adminController.getProducts);

 // /admin/add-pproduct => POST
 router.post('/add-product', adminController.postAddProduct);

 router.get('/edit-product/:productId', adminController.getEditProduct);

module.exports = router;


const path = require('path')
const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');
const adminData = require('./admin');

router.get('/', function(req, res){
    console.log(adminData.products);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
 });
 
 module.exports =router;
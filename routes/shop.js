const express = require('express');

const router = express.Router();

router.get('/', function(req, res){
    res.send("<h1>Hello from home page!!! </h1>");
 });
 
 module.exports =router;
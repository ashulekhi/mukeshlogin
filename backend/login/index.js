var express = require('express');
var controller = require('./loginController.js');
var router = express.Router();

router.get('/', controller.getUser);








module.exports = router;

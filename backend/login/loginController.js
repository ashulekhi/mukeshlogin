var express = require('express');
var userService = require('./loginService');
var path = require('path');


exports.getUser = function(req,res){


console.log('reached till user controller');
userService.getUser();
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>" ,path.resolve(__dirname + '/../../frontend/index.html'));
res.sendFile(path.resolve(__dirname + '/../../frontend/index.html'));
}



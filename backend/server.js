var express = require('express');
var path  = require('path');
var mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/mukeshdata' ,function(err,data){
    console.log('>>> databases connected')
})

var app = express();

require('./routes')(app);


app.set('appPath',__dirname+'/../frontend');


app.listen(3000,function(){
console.log('Server started');

});

console.log(">>>>>>>>>>>>>",path.resolve(__dirname+'/../frontend'))
app.use(express.static(path.resolve(__dirname+'/../frontend')));
exports = module.exports =app ;







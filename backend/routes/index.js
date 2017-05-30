var path = require('path');

module.exports = function(app){

app.use('/login' ,require('./../login'));

 /*app.route('/*')
    .get(function(req, res) {

      console.log('this is the base route >>>' , path.resolve(app.get('appPath') + '/index.html')); 

      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });*/



}

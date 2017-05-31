var express = require('express');
var controller = require('./loginController.js');
var User = require('./login.model');
var router = express.Router();

router.get('/', controller.getUser);
router.post('/deleteUsers' , controller.deleteUsers)

router.get('/getUser' , function(req,res){

    console.log(">>>>>>data received" , req.query);
    User.find({name:req.query.name} , function(err,data){
        console.log(">>>> data found" , data);
        if(err){
            res.send('err');
        }
        res.send('success');
    })

});

router.get('/getAllUsers' , function(req,res) {
console.log('find all users');
User.find({},function(err,data){
    res.send(data);
})
});











module.exports = router;

/**
 * Created by ashu_dev on 31/05/17.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var userSchema = new Schema({
    name:String,
    pass:String
});


var  userModel = mongoose.model('user',userSchema);

module.exports = userModel;
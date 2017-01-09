/*
* @Author: rebatov
* @Date:   2017-01-09 15:02:22
* @Last Modified by:   rebatov
* @Last Modified time: 2017-01-09 16:00:00
*/

'use strict';
var mongoose =require('mongoose');
var Schema =  mongoose.Schema;

var uniSchema = new Schema({
name:{type:String},
greRange:{type:String}
});

module.exports = mongoose.model('University',uniSchema);
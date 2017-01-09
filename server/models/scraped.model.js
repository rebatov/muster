/*
* @Author: rebatov
* @Date:   2017-01-09 18:01:27
* @Last Modified by:   rebatov
* @Last Modified time: 2017-01-09 18:06:55
*/

'use strict';
var mongoose =require('mongoose');
var Schema =  mongoose.Schema;

var scrapedSchema = new Schema({
name:{type:String},
website:{type:String},
totalStudents:{
	undergrad:{type:String},
	grad:{type:String}
},
difficulty:{type:String},
deadline:{type:String},
selection:{
	gpa:{type:String},
	tests:{type:String},
	eca:{type:String}
},
money:{
	coa:{type:String},
	tuition:{type:String},
	room:{type:String}
},
date:{type:Date,default:Date.now}
});

module.exports = mongoose.model('Scraped',scrapedSchema);
/*
* @Author: rebatov
* @Date:   2017-01-09 11:58:02
* @Last Modified by:   rebatov
* @Last Modified time: 2017-01-09 13:06:22
*/

'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var config = require('./config/config');

mongoose.connect(config.database,function(err){
	if(err){
		console.log(err);
	}
	else{
		console.log("Database connected...")
	}
})

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/'));

const cron = require('./server/routes/cron.route')
// const question = require('./server/routes/question.route')
// const login = require('./server/routes/login.route')
// const result = require('./server/routes/result.route')

app.use('/cron',cron)
// app.use('/question',question)
// app.use('/login',login)
// app.use('/result',result)

app.use(morgan('dev'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('*', function(req,res){
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(config.port, function(err){
	if(err)
		console.log(err);
	else
		console.log("Through the wormhole: " + config.port);
});


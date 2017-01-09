/*
 * @Author: rebatov
 * @Date:   2017-01-09 13:09:34
 * @Last Modified by:   rebatov
 * @Last Modified time: 2017-01-09 17:49:31
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


var index = 65;
let xpath = '//*[@id="3009974032510082013"]/div/div[29]/div[2]/table/tbody/tr[1]/td[1]'
var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().usingServer().withCapabilities({ 'browserName': 'phantomjs' }).build();
var mongoose = require('mongoose');
var Uni = require('./server/models/university.model.js');
browser.manage().window().setSize(1920, 1080);
browser.get('http://www.atozbulletin.com/2013/09/list-of-all-us-universities-based-on.html');

function scrape(i) {
	console.log(i)
    console.log(xpath)
    browser.findElement(
            webdriver.By.xpath(xpath)
        ).getAttribute('innerHTML')
        .then(function(text) {
            console.log(text);
            var obj = {};
            obj.name = text;
            obj.greRange = '260-290';
            var uni = new Uni(obj)
            console.log(uni)
            uni.save(function(err, result) {
                if (err)
                    console.log(err);
                else {
                    // console.log(result);
                    obj = {};
                    i =i+1
                    if (i > 10) {
                        xpath = xpath.substr(0, index) + i + xpath.substr(index + 2)
                    } else {
                        xpath = xpath.substr(0, index) + i + xpath.substr(index + 1)
                    }
                    if(i<81)
                    	scrape(i);
                    else{
                    	return ;
                    }
                }
            })
        })
}
scrape(1);

/*
 * @Author: rebatov
 * @Date:   2017-01-09 12:03:30
 * @Last Modified by:   rebatov
 * @Last Modified time: 2017-01-09 12:17:31
 */

'use strict';
var express = require('express');
var router = express.Router();
var Controller = require('../controllers/cron.controller')
var cronController = new Controller();
// Starting the cron
router.get('/get', function(req, res) {
	console.log("Inside cron get")
    // islogged.islogged(req,function(err,logged){
    // 	console.log(logged)
    // 	if(logged.role!="admin"){
    // 		res.json({
    // 			"status":500,
    // 			"message":"Not logged in"
    // 		})
    // 	}
    // 		else{
    cronController.start(function(err, data) {
            if (err)
                res.json({
                    "status": 500,
                    "message": "Internal server error",
                    "data": null
                });
            else
                res.json({
                    "status": 200,
                    "message": "Success",
                    "data": data
                });
        })
        // })
})

module.exports = router;

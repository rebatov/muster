/*
 * @Author: rebatov
 * @Date:   2017-01-09 12:07:19
 * @Last Modified by:   rebatov
 * @Last Modified time: 2017-01-09 12:59:58
 */

'use strict';
var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().usingServer().withCapabilities({ 'browserName': 'phantomjs' }).build();
browser.manage().window().setSize(1920, 1080)
var cronController = function() {};

function handleFailure(err) {
    console.error('Something went wrong\n', err.stack, '\n');
    closeBrowser();
}

function closeBrowser() {
    browser.quit();
}

cronController.prototype.start = function(callback) {
    browser.get('http://www.collegedata.com');
    browser.findElement(
            webdriver.By.name('collegeName'))
        .sendKeys('Stanford');
    browser.findElement(webdriver.By.className('gsc-search-button siteSearchsubmit'))
        .click();
    browser.wait(
        webdriver.until.elementLocated(
            webdriver.By.className("content")), 5000);
    browser.findElement(webdriver.By.id('resultsListUnfixed'))
        .getAttribute('innerHTML').then(function(html) {
            console.log(html);
            callback(null, html)
        })
}
module.exports = cronController;

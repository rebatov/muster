/*
 * @Author: rebatov
 * @Date:   2017-01-09 13:09:34
 * @Last Modified by:   rebatov
 * @Last Modified time: 2017-01-09 14:43:45
 */

'use strict';
var index = 57;
let xpath = '//*[@id="3009974032510082013"]/div/div[8]/table/tbody/tr[1]/td[1]'
var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().usingServer().withCapabilities({ 'browserName': 'phantomjs' }).build();
browser.manage().window().setSize(1920, 1080);
browser.get('http://www.atozbulletin.com/2013/09/list-of-all-us-universities-based-on.html');

function scrape(i) {
    if (i > 14)
        return;
    console.log(xpath)
    browser.findElement(
            webdriver.By.xpath(xpath)
        ).getAttribute('innerHTML')
        .then(function(text) {
            console.log(text);
            i++;
            if (i > 10) {
                xpath = xpath.substr(0, index) + i + xpath.substr(index + 2)
            } else {
                xpath = xpath.substr(0, index) + i + xpath.substr(index + 1)
            }
            scrape(i)
        })
}
scrape(1);

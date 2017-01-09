/*
 * @Author: rebatov
 * @Date:   2017-01-09 12:35:34
 * @Last Modified by:   rebatov
 * @Last Modified time: 2017-01-09 14:42:11
 */

'use strict';
var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().usingServer().withCapabilities({ 'browserName': 'phantomjs' }).build();
browser.manage().window().setSize(1920, 1080)
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
.getAttribute('innerHTML').then(function(html){
	console.log(html);
})
browser.quit();
//*[@id="3009974032510082013"]/div/div[8]/table/tbody/tr[1]/td[1]
//*[@id="3009974032510082013"]/div/div[8]/table/tbody/tr[2]/td[1]
//*[@id="3009974032510082013"]/div/div[8]/table/tbody/tr[14]/td[1]
//*[@id="3009974032510082013"]/div/div[11]/table/tbody/tr[1]/td[1]
//*[@id="3009974032510082013"]/div/div[14]/table/tbody/tr[1]/td[1]
//*[@id="3009974032510082013"]/div/div[18]/table/tbody/tr[1]/td[1]

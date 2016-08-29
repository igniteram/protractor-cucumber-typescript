import {browser} from 'protractor/globals';
import {SearchPageObject} from '../Pages/searchPage';
import * as cucumber from '../node_modules/@types/cucumber';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

export  = function() {
    let search: SearchPageObject = new SearchPageObject();
    
    this.Given(/^I am on google page$/, () => {
        return expect(browser.getTitle()).to.eventually.equal('Google');
    });
}
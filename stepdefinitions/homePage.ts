import { browser } from 'protractor';
import { SearchPageObject } from '../pages/searchPage';
import { defineSupportCode } from 'cucumber';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function ({Given}) {
    let search: SearchPageObject = new SearchPageObject();

    Given(/^I am on google page$/, () => {
        return expect(browser.getTitle()).to.eventually.equal('Google');
    });
})
import { browser } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
const { Given } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const search: SearchPageObject = new SearchPageObject();

Given(/^I am on "(.*?)" search page$/, async (text) => {
    if(text === 'google') {
        await expect(browser.getTitle()).to.eventually.equal("Google");
    } else if(text === 'cucumber') {
        await expect(browser.getTitle()).to.eventually.equal(text+" - Google Search");
    } else if(text === 'protractor') {
        await expect(browser.getTitle()).to.eventually.equal(text+" - Google Search");
    }   
});

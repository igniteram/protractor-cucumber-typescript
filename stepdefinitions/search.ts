import { browser, protractor } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
const { When, Then } = require("cucumber");

const search: SearchPageObject = new SearchPageObject();

When(/^I type "(.*?)"$/, async (text) => {
    await search.searchTextBox.sendKeys(text);
});

When(/^I click on search button$/, async () => {
    await search.searchTextBox.sendKeys(protractor.Key.ENTER);
});

Then(/^I click on google logo$/, async () => {
    await search.logo.click();
});

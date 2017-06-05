import { SearchPageObject } from '../pages/searchPage';
import { defineSupportCode } from 'cucumber';

defineSupportCode(function ({ When, Then }) {
    let search: SearchPageObject = new SearchPageObject();
    When(/^I type "(.*?)"$/, async (text) => {
        await search.searchTextBox.sendKeys(text);
    });

    Then(/^I click on search button$/, async () => {
        await search.searchButton.click();
    });

})

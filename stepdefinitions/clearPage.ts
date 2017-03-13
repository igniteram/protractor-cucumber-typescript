import { SearchPageObject } from '../pages/searchPage';
import { defineSupportCode } from 'cucumber';

defineSupportCode(function ({Then}) {
    let search: SearchPageObject = new SearchPageObject();

    Then(/^I clear the search text$/, () => {
        return search.searchTextBox.clear();
    });
})
import {SearchPageObject} from '../pages/searchPage';

export  = function() {
    
    let search: SearchPageObject = new SearchPageObject();

    this.Then(/^I clear the search text$/, () => {
        return search.searchTextBox.clear();
    });

}
import {SearchPageObject} from '../Pages/searchPage';
import * as cucumber from '../node_modules/@types/cucumber';

export  = function() {
    
    let search: SearchPageObject = new SearchPageObject();

    this.Then(/^I clear the search text$/, () => {
        return search.searchTextBox.clear();
    });

}
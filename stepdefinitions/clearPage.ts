import { SearchPageObject } from "../pages/searchPage";
const { Then } = require("cucumber");

const search: SearchPageObject = new SearchPageObject();

Then(/^I clear the search text$/, async () => {
     await search.searchTextBox.clear();
});

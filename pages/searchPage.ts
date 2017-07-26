import { $ } from 'protractor';

export class SearchPageObject {
    public searchTextBox: any;
    public searchButton: any;

    constructor() {
        this.searchTextBox = $("input[name='q']");
        this.searchButton = $("input[value='Google Search']");
    }
}
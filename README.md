###Protractor-Cucumber-TypeScript Setup Guide   
[![Build Status](https://travis-ci.org/igniteram/protractor-cucumber-typescript.svg?branch=master)](https://travis-ci.org/igniteram/protractor-cucumber-typescript)
[![dependencies](https://david-dm.org/igniteram/protractor-cucumber-typescript.svg)](https://david-dm.org/igniteram/protractor-cucumber-typescript)

This project demonstrates the basic protractor-cucumber-typescript framework project setup.

###Features
* No typings.json or typings folder, they have been replaced by better **'@types'** modules in package.json
* ts-node(typescript execution environment for node) in cucumberOpts. 
* All scripts written with Typescript2.0
* Neat folder structures with transpiled js files in separate output folder.
* Page Object design pattern implementation
* DirectConnect capability for Chrome & Firefox(works best with 47.0.1) browsers
* Extensive hooks implemented for BeforeFeature, AfterScenarios etc.
* Screenshots on failure feature scenarios


###To Get Started

####Pre-requisites
1.NodeJS installed globally in the system.
https://nodejs.org/en/download/

2.Chrome or Firefox(47.0.1 recommended) browsers installed.

3.Text Editor(Optional) installed-->Sublime/Visual Studio Code/Brackets.

####Setup Scripts
* Clone the repository into a folder
* Go inside the folder and run following command from terminal/command prompt
```
   npm install 
```
* All the dependencies from package.json and ambient typings would be installed in node_modules folder.

####Run Scripts
```
    npm test
```
* The above command would create an output folder named 'Typescript' and transpile the .ts files.
* It launches the Firefox Browser and run the scripts

####Writing Features
```
Feature: To search typescript in google
@TypeScriptScenario

  Scenario: Typescript Google Search
    Given I am on google page
    When I type "Typescript"
    Then I click on search button
    Then I clear the search text
```
####Writing Step Definitions
    
```
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
```

####Writing Page Objects
```
import {$} from 'protractor/globals';
    
export class SearchPageObject {
    public searchTextBox:any;
    public searchButton:any;

    constructor() {
        this.searchTextBox = $("input[name='q']");
        this.searchButton = $("button[name='btnG']");
    }
}
```
####Cucumber Hooks
Following method takes screenshot on failure of each scenario
```
this.After((scenario, done) => {
    if (scenario.isFailed()) {
        return browser.takeScreenshot().then(function (base64png) {
            let decodedImage = new Buffer(base64png, 'base64').toString('binary');
            scenario.attach(decodedImage, 'image/png');
        }, (err) => {
            done(err);
        });
    } else {
        done();
    }
});
```
####CucumberOpts Tags
Following configuration shows to call specific tags from feature files
```
cucumberOpts: {
    compiler: "ts:ts-node/register",
    monochrome: true,
    strict: true,
    plugin: ["pretty"],
    require: ['../StepDefinitions/*.ts', '../Support/*.ts'],
    tags: '@TypeScriptScenario,@CucumberScenario,@ProtractorScenario'
}
```
##Contributions
For contributors who want to improve this repo by contributing some code, reporting bugs, issues or improving documentation - PR's are highly welcome, please maintain the coding style , folder structure , detailed description of documentation and bugs/issues with examples if possible.

##License
```   
MIT License

Copyright (c) 2016 Ram Pasala

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
import {ProtractorBrowser} from 'protractor';

export let config = {

    directConnect: true,

    baseUrl: 'http://www.google.com',

    capabilities: {
        browserName: 'chrome'
    },

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        '../../features/*.feature'
    ],

    onPrepare: () => {
        let globals = require('protractor');
        let browser: ProtractorBrowser = globals.browser;
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
       
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        format: ['pretty'],
        require: ['../../stepDefinitions/*.ts', '../../support/*.ts'],
        tags: '@TypeScriptScenario,@CucumberScenario,@ProtractorScenario'
    }
};
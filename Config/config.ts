import {ProtractorBrowser} from 'protractor';

export let config = {
    directConnect: true,

    baseUrl: 'http://www.google.com',

    capabilities: {
        browserName: 'firefox'
    },

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        '../../Features/*.feature'
    ],

    onPrepare: () => {
        let globals = require('protractor/globals');
        let browser: ProtractorBrowser = globals.browser;
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
       
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        monochrome: true,
        strict: true,
        plugin: ["pretty"],
        require: ['../../StepDefinitions/*.ts', '../../Support/*.ts'],
        tags: '@TypeScriptScenario,@CucumberScenario,@ProtractorScenario'
    }
};
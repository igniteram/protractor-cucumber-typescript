const Cucumber = require('cucumber');
import { browser } from 'protractor';
import * as fs from 'fs';
import { config } from '../config/config';
import { defineSupportCode } from "cucumber";
import * as reporter from 'cucumber-html-reporter';
import { mkdirp } from 'mkdirp';

defineSupportCode(function ({ registerHandler, registerListener, After, setDefaultTimeout }) {
    setDefaultTimeout(10 * 1000);
    let jsonReports = process.cwd() + "/reports/json";
    let htmlReports = process.cwd() + "/reports/html";
    let targetJson = jsonReports + "/cucumber_report.json";

    registerHandler('BeforeFeature', function (event, callback) {
        browser.get(config.baseUrl);
        setTimeout(callback, 5000);
    });

    After(function (scenario) {
        let world = this;
        if (scenario.isFailed()) {
            return browser.takeScreenshot().then(function (screenShot) {
                // screenShot is a base-64 encoded PNG
                world.attach(screenShot, 'image/png');
            });
        }
    })

    let cucumberReporterOptions = {
        theme: "bootstrap",
        jsonFile: targetJson,
        output: htmlReports + "/cucumber_reporter.html",
        reportSuiteAsScenarios: true
    };

    let logFn = string => {
        if (!fs.existsSync(jsonReports)) {
            mkdirp.sync(jsonReports);
        }
        try {
            fs.writeFileSync(targetJson, string);
            reporter.generate(cucumberReporterOptions); // invoke cucumber-html-reporter
        } catch (err) {
            if (err) {
                console.log(`Failed to save cucumber test results to json file. 
                             Failed to create html report.
                             `);
                console.log(err);
            }
        }
    };
    let jsonformatter = new Cucumber.JsonFormatter({
        log: logFn
    });
    registerListener(jsonformatter);
})
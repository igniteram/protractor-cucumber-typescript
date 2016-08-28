/*jslint node: true*/
import {browser} from 'protractor/globals';
import * as fs from 'fs';
import {config} from '../Config/config';
import * as cucumber from '../node_modules/@types/cucumber';

export = function () {
        
        this.registerHandler('BeforeFeature', (event) => {
            return browser.get(config.baseUrl);
        });

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
    }
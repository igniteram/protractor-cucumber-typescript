/*jslint node: true*/
import {browser} from 'protractor';
import * as fs from 'fs';
import {config} from '../config/config';

export = function () {
        
        this.registerHandler('BeforeFeature',{timeout:10*1000}, (event) => {
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
import 'core-js/es6';
import 'reflect-metadata';
require('zone.js/dist/zone');

// bring in electron for angular app
// require('electron');

import 'jquery';
require('../js/bootstrap.min.js');


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

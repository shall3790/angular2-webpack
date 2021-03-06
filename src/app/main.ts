import 'core-js/es6';
import 'reflect-metadata';
require('zone.js/dist/zone');
// jquery
// let $ = require('jquery');

// css
// require('../../css/bootstrap.css');
require('../../css/app.css');

// require('bootstrap');
import {
    disableDeprecatedForms,
    provideForms
}                                       from '@angular/forms';
import {
    LocationStrategy,
    HashLocationStrategy
}                                       from '@angular/common';
import { bootstrap }                    from '@angular/platform-browser-dynamic';
import { AppComponent }                 from './app.component';
import { appRouterProviders }           from './app.routes';

// import { enableProdMode }      from '@angular/core';

// enableProdMode();

bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms(),
    appRouterProviders,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
])
.catch(err => console.error(err));

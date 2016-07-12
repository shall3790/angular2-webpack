import 'core-js/es6';
import 'reflect-metadata';
require('zone.js/dist/zone');
// css
require('../../css/bootstrap.css');
require('../../css/app.css');


import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';

// import { enableProdMode }      from '@angular/core';

// enableProdMode();

bootstrap(AppComponent, [
    appRouterProviders
])
.catch(err => console.error(err));

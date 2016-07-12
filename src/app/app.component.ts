import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

let html = require('./app.component.html');

@Component({
    selector: 'my-app',
    template: html,
    // template: '<h1>My First Angular 2 App with WebPack!!</h1>'
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
    pageTitle: string = 'Angular 2 - Webpack';
}

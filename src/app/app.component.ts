import { Component } from '@angular/core';

let html = require('./app.component.html');

@Component({
    selector: 'my-app',
    template: html
    // template: '<h1>My First Angular 2 App with WebPack!!</h1>'
})
export class AppComponent { }


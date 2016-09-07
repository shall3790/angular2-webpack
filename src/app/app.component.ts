// import { Component }            from '@angular/core';
// import { ROUTER_DIRECTIVES, RouterLink, RouterOutlet }    from '@angular/router';
// // directives: [RouterOutlet, RouterLink, ROUTER_DIRECTIVES] 


// let html = require('./app.component.html');

// @Component({
//     selector: 'my-app',
//     template: html,
//     directives: [
//         RouterOutlet,
//         RouterLink,
//         ROUTER_DIRECTIVES
//     ]
// })
// export class AppComponent {
//     pageTitle: string = 'Angular 2 - Webpack Test';

// }

import {
    Component,
    OnInit
} from '@angular/core';

// import {ipcRenderer} from 'electron';

// let electron = require('electron');



declare var electron: any;
const ipc = electron.ipcRenderer;

let html = require('./app.component.html');

@Component({
    selector: 'my-app',
    template: html
})
export class AppComponent extends OnInit {

    ngOnInit() {
        console.log('AppComponent OnInit...');

        ipc.on('log', function(evt: any, data: any) {
            console.log(data);
        });

        ipc.on('update-ready', function(evt: any, data: any) {
            console.log('updates ready, please restart the application');
        });

        ipc.send('log-r', 'test sending ipc log from AppComponent...');
    }
}

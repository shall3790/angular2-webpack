import { Component }            from '@angular/core';
import { ROUTER_DIRECTIVES, RouterLink, RouterOutlet }    from '@angular/router';
// directives: [RouterOutlet, RouterLink, ROUTER_DIRECTIVES] 


let html = require('./app.component.html');

@Component({
    selector: 'my-app',
    template: html,
    directives: [
        RouterOutlet,
        RouterLink,
        ROUTER_DIRECTIVES
    ]
})
export class AppComponent {
    pageTitle: string = 'Angular 2 - Webpack Test';

}

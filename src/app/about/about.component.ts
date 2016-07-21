import { 
    Component, OnInit
}                                   from '@angular/core';
import {
    AlertComponent, 
    DATEPICKER_DIRECTIVES}          from 'ng2-bootstrap/ng2-bootstrap';

let html_template = require('./about.component.html');

@Component({
    template: html_template,
    directives: [
        AlertComponent, DATEPICKER_DIRECTIVES
    ]
})
export class AboutComponent implements OnInit {
    date: Date = new Date();

    ngOnInit() {
        console.log('AboutComponent: init')
    }
}

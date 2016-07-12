import { 
    Component, OnInit
}                              from '@angular/core';

let html_template = require('./about.component.html');

@Component({
    template: html_template
})
export class AboutComponent implements OnInit {
    ngOnInit() {
        console.log('AboutComponent: init')
    }
}

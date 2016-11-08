import { Component, OnInit } from '@angular/core';

import { HelptextService } from './helptext.service';

@Component({
    selector: "helptext",
    templateUrl: "helptext.component.html",
    styleUrls: ["helptext.component.css"]
})

export class HelptextComponent {
    constructor(private helptextService: HelptextService){}
    helptextData: Object[] = [];

    ngOnInit() {
        this.helptextService.getHelptextArray().then(data => this.buildHelptext(data));
    }

    buildHelptext(data:Object[]) {
        this.helptextData = data;
    }
}
import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { DataService } from "./data.service";
import { Violations } from "./violations";

@Component({
    selector: "broken-bar",
    templateUrl: "./brokenbar.component.html",
    providers: [ ]
})

export class BrokenBarComponent {
    @ViewChild('svg') svg: ElementRef;

    constructor(private dataService: DataService) {}

    NgOnInit() {
        this.dataService.getData().then(data => this.drawBrokenBar(data));
    }

    drawBrokenBar(data: Violations[]) {
        let cStop = 0,
            majStop = 0,
            nonCStop = 0,
            minStop = 0;
        

        for(let arr of data)
        {

        }
    }
}
import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { DataService } from "./data.service";
import { Violations } from "./violations";

@Component({
    selector: "brokenbar",
    templateUrl: "./brokenbar.component.html"
})

export class BrokenBarComponent {
    @ViewChild('svg') svg: ElementRef;
    svgProp = {
        height: 200,
        width: 500
    }

    constructor(private dataService: DataService) {}

    NgOnInit() {
        this.dataService.getData().then(data => this.drawBrokenBar(data));
    }

    drawBrokenBar(data: Violations[]) {
        let height: number = 40;
        let width: number = 0;
        let cStop: number = 0;
        let majStop: number = 0;
        let nonCStop:number = 0;
        let minStop:number = 0;
        let rectX: number = 0;
        let rectY: number = 0;
        let violationIndex: number = 0;
        let totalViolations: number = this.sumAllViolations(data);
        let maxViolationType: number = this.getCountMaxViolationType(data);
        let rectArr: Object[] = [];

        for(let arr of data)
        {
            let rect = {x: rectX, y: rectY};

            violationIndex++;
        }
    }

    getCountMaxViolationType(data: Violations[]): number {
        let max = 0;
        let critTotal = this.getViolationTypeTotal(data, 0);
        let majTotal = this.getViolationTypeTotal(data, 1);
        let nonCTotal = this.getViolationTypeTotal(data, 2);
        let minTotal = this.getViolationTypeTotal(data, 3);
        max = Math.max(critTotal, majTotal, nonCTotal, minTotal);
        return max;
    }

    getViolationTypeTotal(data: Violations[], index: number): number {
        let total: number = 0;
        if(index === 0)
            for(let scoreGroup of data) {
                total += scoreGroup.critical;
            }
        else if(index === 1)
            for(let scoreGroup of data) {
                total += scoreGroup.major;
            }
        else if(index === 2)
            for(let scoreGroup of data) {
                total += scoreGroup.nonCritical;
            }
        else if(index === 3)
            for(let scoreGroup of data) {
                total += scoreGroup.minor;
            }
        return total;
    }

    sumAllViolations(data: Violations[]): number {
        let total: number = 0;
        let index: number = 0;

        for(let scoreGroup of data) {
            total += scoreGroup.critical;
            total += scoreGroup.major;
            total += scoreGroup.nonCritical;
            total += scoreGroup.minor;
        }

        return total;
    }

    sumScoregroupViolations(data: Violations[], index: number) {
        let total = 0;
        total += data[index].critical;
        total += data[index].major;
        total += data[index].nonCritical;
        total += data[index].minor;
        return total;
    }
}
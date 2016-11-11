import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { DataService } from "./data.service";
import { Violations } from "./violations";

@Component({
    selector: "brokenbar",
    templateUrl: "./brokenbar.component.html"
})

export class BrokenBarComponent {
    svgProp = {
        height: 200,
        width: 500
    }

    constructor(private dataService: DataService) {}

    NgOnInit() {
        this.barArr.push({x: 200, y:0, width: 200, height: 100});
        this.dataService.getData().then(data => this.drawBrokenBar(data));
    }

    @ViewChild('rect') svg: ElementRef;
    barArr: Object[] = [{x: 0, y:0, width: 200, height: 100}];
    
    drawBrokenBar(data: Violations[]): void {
        
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
        console.log(totalViolations);
        let critTot = this.getViolationTypeTotal(data, 0);
        let majTot = this.getViolationTypeTotal(data, 1);
        let nonCTot = this.getViolationTypeTotal(data, 2);
        let minTot = this.getViolationTypeTotal(data, 3);

        let maxViolationType: number = Math.max(critTot, majTot, nonCTot, minTot);
        let numScoreGroups:number = data.length;
        let bufferSize: number = 2;

        let yPos = [0, this.svgProp.height / 4, (this.svgProp.height / 4) * 2, (this.svgProp.height / 4) * 3];
        let barHeight = this.svgProp.height / 4 - 2;

        let bufferPix: number = numScoreGroups * bufferSize;
        let normBarSize = totalViolations - bufferPix;
        let rect = {x: 0, y: 0, width: 0, height: barHeight};

        for(let barlet of data)
        {
            let critWidth: number;
            let majWidth: number;
            let nonCWidth: number;
            let minWidth: number;

            critWidth = Math.round(barlet.critical / normBarSize);
            rect.x = cStop;
            rect.y = yPos[0];
            this.barArr.push(rect);
            cStop += critWidth + 2;

            majWidth = Math.round(barlet.critical / normBarSize);
            rect.x = majStop;
            rect.y = yPos[1];
            this.barArr.push(rect);
            majStop += majWidth + 2;

            nonCWidth = Math.round(barlet.critical / normBarSize);
            rect.x = nonCStop;
            rect.y = yPos[2];
            this.barArr.push(rect);
            nonCStop += nonCWidth + 2;
            
            minWidth = Math.round(barlet.critical / normBarSize);
            rect.x = minStop;
            rect.y = yPos[3];
            this.barArr.push(rect);
            minStop += minWidth + 2;
        }
    }

    getViolationTypeTotal(data: Violations[], index: number): number {
        console.log("this isnt doing anything");
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

    onSelect(bar) {
        alert("clicked a bar");
    }
}
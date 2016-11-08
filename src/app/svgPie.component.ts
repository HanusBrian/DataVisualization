import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";

import { DataService } from './data.service';
import { Violations } from './violations';

@Component({
    selector: 'svg-pie',
    templateUrl: './svgPie.component.html',
    styleUrls: ["./svgPie.component.css"]
})

export class SvgPieComponent {
    // initialize elements 
    svgProp = {
        width: 300,
        height: 300
    }

    constructor(private dataService: DataService) {}

    // On init get the data from the service into dataArray
    ngOnInit(){
        this.dataService.getData().then(data => this.drawPie(data));
    }

    @ViewChild('path') path: ElementRef;
    pathArr: Object[] = [];
    dataArray: number[];
    
    drawPie(data: Violations[]) {

        let total: number = 0;
        total += data[0].critical;
        total += data[0].major;
        total += data[0].nonCritical;
        total += data[0].minor;

        // Normalize data
        let critPercent = data[0].critical / total;
        let majPercent = data[0].major / total;
        let noncritPercent = data[0].nonCritical / total;
        let minPercent = data[0].minor / total;

        let normalData = [critPercent, majPercent, noncritPercent, minPercent];

        // Calc path vars
        let padding: number = 5;
        let centerX = (this.svgProp.width-padding) / 2;
        let centerY = (this.svgProp.height-padding) / 2;
        let radius: number = centerX-5;
        let startAngle: number = 1/2;
        let prevEndPoint: number[] = [centerX, padding];
        let largeArcFlag: number;
        let endX: number = centerX;
        let endY: number = padding;
        let colors: string[] = ['#ff0000', '#ffcc00', '#ffff00', '#0000ff'];

        for (let i = 0; i < normalData.length; i++) {
            let numViolations: number;
            if(i == 0)
                numViolations = data[0].critical;
            else if (i == 1)
                numViolations = data[0].major;
            else if (i == 2)
                numViolations = data[0].nonCritical;
            else if (i == 3)
                numViolations = data[0].minor;
                
            // long way around the circle?
            if(normalData[i] >= .5){
                largeArcFlag = 1;
            }
            else 
                largeArcFlag = 0;
            
            // get endpoint for drawing arc
            let arcEndAngle = (startAngle + normalData[i]*2) % 2;
            endX = Math.round(centerX + Math.cos(arcEndAngle * Math.PI) * (radius));
            endY = Math.round(centerY + (Math.sin(arcEndAngle * Math.PI) * -(radius)));

            let pathString = {path:"M "+ centerX + " " + centerY + 
                            " L " + prevEndPoint[0] + " " + prevEndPoint[1] +
                            " A " + radius + " " + radius + " 0 " + largeArcFlag + " 0 " + endX + " " + endY +
                            " Z", fill: colors[i], stroke: 'white', strokewidth: 1, numViolations: numViolations};

            this.pathArr.push(pathString);

            prevEndPoint[0] = endX;
            prevEndPoint[1] = endY;
            startAngle = arcEndAngle;
        }
    }

    onSelect(path) {
        alert("This selection has: " + path.numViolations + " Violations");
    }

}
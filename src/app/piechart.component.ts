import { Component, ViewChild, ElementRef, Input, OnInit } from '@angular/core';
import { Violations } from './violations';

import { DataService } from './data.service';

@Component ({
    selector: 'piechart',
    templateUrl: './piechart.component.html',
    styles: ['./piechart.component.css']
})

export class PieChartComponent {
    @ViewChild("canvas") canvas: ElementRef;

    constructor(private dataService: DataService) {}

    getData() { 
        this.dataService.getData().then(data => this.drawPieChart(data))
    }

    ngOnInit() {
        this.getData();
    }

    drawPieChart(data: Violations[]): void {
        let violationArray: number[] = [];

        violationArray.push(data[0].critical);
        violationArray.push(data[0].major);
        violationArray.push(data[0].nonCritical);
        violationArray.push(data[0].minor);
        
        let width: number = 300;
        let height: number = 300;

        let pieArray: number[][] = [];
        let totalViolations: number = violationArray.reduce((prev, curr)=>{return prev + curr});
        for (let i: number = 0; i < violationArray.length; i++) {
            pieArray.push([i, violationArray[i] / totalViolations]);
        }

        let centerX: number = Math.floor(width / 2);
        let centerY:number = Math.floor(height / 2);
        let radius: number = 145;
        let prevEnd: number = 0;
        let newEnd: number = 0;

        let colors: string[] = ['#ff0000', '#ffcc00', '#ffff00', '#0000ff'];
        let context: CanvasRenderingContext2D = this.canvas.nativeElement.getContext("2d");


        for (let i: number = 0; i < pieArray.length; i++) {
            context.beginPath();

            context.moveTo(centerX, centerY);
            newEnd = prevEnd + (pieArray[i][1] * (2 * (Math.PI)));
            context.arc(centerX, centerY, radius, prevEnd, newEnd, false);
            context.lineTo(centerX, centerY);
            context.strokeStyle = '#FFFFFF';
            context.lineWidth = 4;
            context.stroke();
            context.fillStyle = colors[i];
            context.fill();
            prevEnd += pieArray[i][1] * (2 * Math.PI);
        }
    }

    ngAfterViewInit(){

    }
}

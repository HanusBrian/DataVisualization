import { Component, ViewChild, ElementRef } from '@angular/core';

@Component ({
    selector: 'pie-chart',
    templateUrl: './piechart.component.html',
    styles: ['./piechart.component.css']
})

export class PieChart {
    @ViewChild("canvas") canvas: ElementRef;

    constructor() { }

    ngAfterViewInit(){
        let violationArray: number[] = [123,157,86,45];
        let width: number = 200;
        let height: number = 200;

        let pieArray: number[][] = [];
        let totalViolations: number = violationArray.reduce((prev, curr)=>{return prev + curr});
        for (let i: number = 0; i < violationArray.length; i++) {
            pieArray.push([i, violationArray[i] / totalViolations]);
        }

        let centerX: number = Math.floor(width / 2);
        let centerY:number = Math.floor(height / 2);
        let radius: number = 95;
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
}

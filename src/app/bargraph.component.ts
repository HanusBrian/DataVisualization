import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Violations } from './violations';

@Component({
    selector: 'bargraph',
    templateUrl: '/bargraph.component.html',
    providers: [DataService]
})

export class BarGraphComponent {

    @ViewChild('bargraph') canvas: ElementRef;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.initBarGraph();
    }

    initBarGraph(): void {
        this.dataService.getData().then(data => this.drawBarGraph(data));
    }

    drawBarGraph(violationsArray: Violations[]): void {
        let array: number[] = [];

        array.push(violationsArray[0].critical);
        array.push(violationsArray[0].major);
        array.push(violationsArray[0].nonCritical);
        array.push(violationsArray[0].minor);

        let max: number = array.reduce((prev, curr) => { return Math.max(prev, curr); })

        let sigCat: number = 0;
        for (let i: number = 0; i < array.length; i++) {
            if (array[i] != 0 && array[i] != null) sigCat++;
        }

        let colors: string[] = ['#ff0000', '#ffcc00', '#ffff00', '#0000ff'];

        //style the canvas and get context (boiler plate)
        let height: number = this.canvas.nativeElement.height;
        let width: number = this.canvas.nativeElement.width;

        let ctx: CanvasRenderingContext2D = this.canvas.nativeElement.getContext("2d");

        let gap: number = 2;
        let count: number = 0;
        for (let i: number = 0; i < array.length; i++) {
            if (array[i] != 0) {
                ctx.fillStyle = colors[i];
                ctx.fillRect(0, gap + (height / sigCat) * count, (width * array[i] / max) - 5, height / sigCat - 2);
                count++;
            }
        }
    }
}

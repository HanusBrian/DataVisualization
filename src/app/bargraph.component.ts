import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'bar-graph',
    templateUrl: '/bargraph.component.html'
})

export class BarGraph {

    @ViewChild('bargraph') canvas: ElementRef;

    constructor() { }

    ngAfterViewInit() {

        let array: number[] = [123,157,86,45];

        let max: number = array.reduce((prev, curr) => { return Math.max(prev, curr); })

        let sigCat: number = 0;
        for (let i: number = 0; i < array.length; i++) {
            if (array[i] != 0 && array[i] != null) {
                sigCat++;
            }
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

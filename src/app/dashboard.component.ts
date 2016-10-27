import { Component, OnInit, Input } from '@angular/core';

import { BarGraphComponent } from './bargraph.component';
import { PieChartComponent } from './piechart.component';

import { Violations } from './violations';


@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent {
    // getData(): void {
    //     this.dataService.getData().then(data => this.data = data);
    // }

    // ngOnInit(): void {
    //     this.getData();
    // }
    
}
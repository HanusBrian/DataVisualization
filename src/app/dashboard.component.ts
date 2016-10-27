import { Component, OnInit, Input } from '@angular/core';

import { BarGraphComponent } from './bargraph.component';
import { PieChartComponent } from './piechart.component';

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent {
    title = 'Dashboard';
}
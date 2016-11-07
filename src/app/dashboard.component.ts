import { Component, OnInit, Input } from '@angular/core';

import { BarGraphComponent } from './bargraph.component';
import { PieChartComponent } from './piechart.component';
import { DataTableComponent } from './data-table.component';
import { SvgPieComponent } from './svgPie.component';

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent {
    title = 'Dashboard';
}
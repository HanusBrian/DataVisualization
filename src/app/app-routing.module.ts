import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PieChartComponent } from './piechart.component';
import { DashboardComponent } from './dashboard.component';
import { BarGraphComponent } from './bargraph.component';
import { DataTableComponent } from './data-table.component';
import { SvgPieComponent } from './svgPie.component';
import { BrokenBarComponent } from './brokenbar.component';
import { HelptextComponent } from './helptext.component';

const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'bargraph', component: BarGraphComponent},
    {path: 'piechart', component: PieChartComponent},
    {path: 'datatable', component: DataTableComponent},
    {path: 'svgpie', component: SvgPieComponent},
    {path: 'brokenbar', component: BrokenBarComponent},
    {path: 'helptext', component: HelptextComponent},
]

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
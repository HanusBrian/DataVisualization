import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { PieChartComponent } from './piechart.component';
import { BarGraphComponent } from './bargraph.component';
import { DataTableComponent } from './data-table.component';
import { SvgPieComponent } from './svgPie.component';
import { HelptextComponent } from './helptext.component';
import { BrokenBarComponent } from './brokenbar.component';

import { DataService } from './data.service';
import { HelptextService } from './helptext.service';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    BarGraphComponent,
    DashboardComponent,
    DataTableComponent,
    SvgPieComponent,
    HelptextComponent,
    BrokenBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [ DataService, HelptextService ],
  bootstrap: [AppComponent]
})

export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ParaComponent } from './paragraph.component';
import { PieChart } from './piechart.component';
import { BarGraph } from './bargraph.component';

@NgModule({
  declarations: [
    AppComponent,
    ParaComponent,
    PieChart,
    BarGraph
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

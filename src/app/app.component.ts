import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Violations } from './violations';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  data: Violations[];

  // constructor(private dataService: DataService) { }

  title = 'nqDataSolutions';
  subtitle = '~Better than tableau';
  charts = {
    piechart: 'Pie Chart',
    bargraph: 'Bar Graph',
    datatable: 'Data Table',
    svgpie: 'Interactive Pie Chart',
    brokenbar: 'Broken Bar Chart',
    helptext: 'HelpText'
  }
  navigator = {
    dashboard: 'Dashboard',
    reports: 'Reports',
    data: 'Results',
  }
}

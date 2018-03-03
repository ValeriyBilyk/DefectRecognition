import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.scss']
})
export class StatisticsPageComponent implements OnInit {

  constructor() {
    this.options = {
      title : { text : 'Test chart' },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 190],
      }],
      credits: {
        enabled: false
      },
    };
  }
  options: Object;

  ngOnInit() {
  }

}

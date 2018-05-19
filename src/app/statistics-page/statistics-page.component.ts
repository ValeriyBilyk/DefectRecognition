import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.scss']
})
export class StatisticsPageComponent implements OnInit {

  constructor() {
    this.options = {
      chart: {
        type: 'column'
      },
      title : { text : 'Total count of analyzed photos' },
      yAxis: {
        title: {
          text: 'Total count of photos'
        }
      },
      xAxis: {
        type: 'category',
        labels: {
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      },
      series: [{
        data: [
          ['Apple', 6550],
          ['SpaceX', 9000],
          ['Nasa', 2000],
          ['Microsoft', 4000]
        ],
      }],
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
    };

    this.percentageOptions = {
      chart: {
        type: 'column'
      },
      title : { text : 'Percentage of not broken stones' },
      yAxis: {
        title: {
          text: 'Percentage'
        }
      },
      xAxis: {
        type: 'category',
        labels: {
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      },
      series: [{
        data: [
          ['Apple', 80],
          ['SpaceX', 90],
          ['Nasa', 70],
          ['Microsoft', 60]
        ],
      }],
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            y: 25,
            color: '#fff',
            format: '{point.y:.1f}%'
          }
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
    };
  }
  options: Object;
  percentageOptions: Object;

  ngOnInit() {
  }

}

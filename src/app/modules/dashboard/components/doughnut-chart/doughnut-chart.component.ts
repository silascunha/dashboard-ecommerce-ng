import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent {

  public doughnutChartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: [
      'Eletrônicos',
      'Laptops',
      'iPhones'
    ],
    datasets: [
      {
        data: [70, 20, 10],
        label: 'Receita',
        //borderColor: ['#5C6BDB', '#DB8F72', '#BB4445'],
        backgroundColor: ['#5C6BDB', '#DB8F72', '#BB4445'],
        borderWidth: 0,
        rotation: 170,

      }
    ]
  };

  public doughnutChartOptions: ChartOptions<'doughnut'> = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        text: 'Vendas por categoria',
        display: true,
        align: 'start',
        color: '#D8D8D8',
        font: {
          size: 20,
          family: "'Roboto', sans-serif"
        },
        padding: 0
      },
      legend: {
        align: 'start',
        position: 'bottom',
        labels: {
          usePointStyle: true,
          boxHeight: 5,
          boxWidth: 5,
        }
      },
  
    },
    color: '#A9A9A9',
    cutout: 80,
  };
  public doughnutChartLegend = true;

  constructor() {}
}

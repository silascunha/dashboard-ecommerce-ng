import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

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
        padding: {
          bottom: 12
        }
      },
      legend: {
        align: 'start',
        position: 'bottom',
        labels: {
          usePointStyle: true,
          boxHeight: 5,
          boxWidth: 5,
          padding: 12,
        },
      },
  
    },
    cutout: '70%',
    responsive: true,
    
  };
  public doughnutChartLegend = true;

  constructor() {}
}

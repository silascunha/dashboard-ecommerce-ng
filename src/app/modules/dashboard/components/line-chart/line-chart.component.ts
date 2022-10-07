import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez'
    ],
    datasets: [
      {
        data: [ 20, 35, 70, 68, 56, 60, 87, 83, 86, 72, 84, 82],
        label: 'Receita',
        borderColor: '#8a76fc',
        backgroundColor: '#8a76fc',
        pointBackgroundColor: '#8a76fcbb',
        pointBorderColor: '#8a76fcbb',
      },
      {
        data: [ 36, 40, 62, 59, 68, 76, 72, 62, 60, 58, 67, 70 ],
        label: 'Pedidos',
        borderColor: '#C55C47',
        backgroundColor: '#C55C47',
        pointBackgroundColor: '#C55C47bb',
        pointBorderColor: '#C55C47bb',
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        text: 'Receita vs Pedidos',
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
        align: 'end',
        labels: {
          usePointStyle: true,
          boxHeight: 5,
          boxWidth: 5,
        }
      },
      
    },
    color: '#A9A9A9',
    datasets: {
      line: {
        fill: false,
        tension: 0.4,
      }
    },
    scales: {
      y: {
        grid: {
          color: '#353535',
          borderDash: [5, 5],
        },
        max: 100,
        min: 0,
        ticks: {
          // forces step size to be 20 units
          stepSize: 20
        }
      },
      x: {
        grid: {
          display: false,
        }
      }
    }
  };
  public lineChartLegend = true;

  constructor() { }
}

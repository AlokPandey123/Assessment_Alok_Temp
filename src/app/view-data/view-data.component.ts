import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.scss']
})
export class ViewDataComponent implements OnInit, OnDestroy {
  dataEntries: { datetime: Date; temperature: number }[] = [];
  private dataSubscription: Subscription | undefined;

  chartData: ChartData<'line'> = {
    labels: [],
    datasets: [
      {
        label: 'Temperature over Time',
        data: [],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  chartOptions: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day'
        }
      },
      y: {
        min: -50,
        max: 50
      }
    }
  };

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataSubscription = this.dataService.data$.subscribe(data => {
      console.log('Data received:', data); // Debug line
      this.dataEntries = data;
      this.updateChart();
    });
  }
  

  ngOnDestroy() {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }

  updateChart() {
    this.chartData.labels = this.dataEntries.map(entry => entry.datetime);
    this.chartData.datasets[0].data = this.dataEntries.map(entry => entry.temperature);
  }
}
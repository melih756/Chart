import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'chart';
  myArray: any[] = [];
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;
  myChart: Chart | undefined;

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      const randomInt = Math.floor(Math.random() * 101); // 0 ile 100 arasında tam sayı
      this.myArray.push(randomInt);
    }
  }

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    const canvas = this.chartCanvas.nativeElement;
    const ctx = canvas.getContext('2d');
    this.myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6', 'Data 7', 'Data 8', 'Data 9', 'Data 10'],
        datasets: [{
          label: 'Random Numbers',
          data: this.myArray,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}

import { Component, ElementRef, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    var canvas = this.elementRef.nativeElement.querySelector('#splineChart') as HTMLCanvasElement;
    var ctx = canvas.getContext('2d');

    if (ctx) {
      var gradient = ctx.createLinearGradient(0, 0, 0, 200);
      gradient.addColorStop(0, '#e0dafd');
      gradient.addColorStop(0.2637, '#e0dafd');
      gradient.addColorStop(1, 'white');

      var chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو","اغسطس","سبتمبر","اكتوبر"," نوفمبر","ديسمبر"],
          datasets: [{
            label: "إستخدام",
            data: [100, 200, 150, 300, 250, 400, 250,100, 200, 150, 300, 250],
            borderColor: '#8A74F9',
            backgroundColor: gradient,
            tension: 0.4,
            fill: true
          }]
        },
        options: {
          responsive: true, // Enable responsiveness
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  var label = context.dataset.label || '';
                  var value = context.parsed.y || '';
                  return label + ' ' + value;
                }
              }
            }
          },
          scales: {
            y: {
              display: false,
            },
            x: {
              title: {
                display: false,
                text: 'Month'
              },
              ticks: {
                font: {
                  family: 'Neo Sans Arabic, sans-serif', // Change the font family here

                  size: 14 // Adjust the font size here
                }
              }
            }
          }
        }
      });
    }
  }
}

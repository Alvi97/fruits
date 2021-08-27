import { Component, Input, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

@Input() fruit:any;

arrayofobj:object[] = []

options:any = {
  chart: {
    type: 'pie'
  },
  theme: {
    palette: 'palette6' // upto palette10
  },
  
  legend: {
    show: true,
    showForSingleSeries: false,
    showForNullSeries: true,
    showForZeroSeries: true,
    position: 'bottom',
    horizontalAlign: 'center', 
    floating: false,
    fontSize: '14px',
    fontFamily: 'Helvetica, Arial',
    fontWeight: 400,
    formatter: undefined,
    inverseOrder: false,
    width: undefined,
    height: undefined,
    tooltipHoverFormatter: undefined,
    customLegendItems: [],
    offsetX: 0,
    offsetY: 0,
    labels: {
        colors: undefined,
        useSeriesColors: false
    },
    markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: undefined,
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0
    },
    itemMargin: {
        horizontal: 5,
        vertical: 0
    },
    onItemClick: {
        toggleDataSeries: true
    },
    onItemHover: {
        highlightDataSeries: true
    },
},
  series: [],
  labels: []
}


  constructor() { }

  ngOnInit(): void {
    let chart = new ApexCharts(document.querySelector("#chart"), this.getData());

chart.render();
    this.getData()
  }

  getData(){
    console.log('called');
    const entries = Object.entries(this.fruit.nutritions);
  let objs = entries.map(x => { 
    this.options.labels.push(x[0]);
    this.options.series.push(x[1]);
    
  });
  console.log(this.options)
   return this.options;
   
  }

  


}

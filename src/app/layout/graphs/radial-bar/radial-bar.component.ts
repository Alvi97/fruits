import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-radial-bar',
  templateUrl: './radial-bar.component.html',
  styleUrls: ['./radial-bar.component.css']
})
export class RadialBarComponent implements OnInit {

  @Input() fruit:any;

  arrayofobj:object[] = []
  
  options:any = {
    chart: {
      type: 'radialBar'
    },
    theme: {
      palette: 'palette8' // upto palette10
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
      let chart1 = new ApexCharts(document.querySelector("#chart1"), this.getData());
  
      chart1.render();
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

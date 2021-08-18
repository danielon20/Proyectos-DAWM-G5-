import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
//import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
  //encapsulation: ViewEncapsulation.None,
})
export class EstadisticasComponent implements OnInit {

  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Curso de HTML' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Curso de SQL' },
  ];
  public lineChartLabels: Array<any> = ['Enero', 'Febrero', 'Marzo', 'April', 'Mayo', 'Junio', 'Julio'];

  public lineChartOptions:any={
    responsive:true,

    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };

  public lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(82, 157, 58,0.5)',
      borderColor: 'green',
      pointBackgroundColor: 'rgba(5.5, 22.4, 0,1)',
      pointBorderColor: '#1A5B06',
      pointHoverBackgroundColor: '#1A5B06',
      pointHoverBorderColor: 'rgba(5.5, 22.4, 0,1)'
    },
    {
      backgroundColor: 'rgba(91, 60, 173,0.5)',
      borderColor: '#4B3388',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },

  ];

  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  //public lineChartPlugins = [pluginAnnotations];



  constructor() { }

  ngOnInit(): void {

  }

  public randomize():void{
    let _lineChartData:Array<any>=new Array(this.lineChartData.length);
    for(let i=0; i<this.lineChartData.length;i++){
      _lineChartData[i]={data:new Array(this.lineChartData[i].data.length),label:this.lineChartData[i].label};
      for(let j=0;j<this.lineChartData[i].data.lenght;j++){
        _lineChartData[i].data[j]=Math.floor((Math.random()*100)+1);
      }
    }
    this.lineChartData=_lineChartData;
  }

  public chartClicked(e:any):void{
    console.log(e);
  }
  public chartHovered(e:any):void{
    console.log(e);
  }




}

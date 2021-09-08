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

  public lineChartData: Array<any> =[];
  /*
  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Curso de HTML' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Curso de SQL' },
  ];*/
  public lineChartLabels: Array<any> = [];

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
  public lineChartType: ChartType = 'bar';
  //public lineChartPlugins = [pluginAnnotations];



  constructor() {
    fetch("http://localhost:3002/cursos")
    .then(data=>data.json())
    .then(data=>{
      console.log(data);
      var colection:any={data:[], label:'Estudiantes por materia'};


      data.forEach((element: { [x: string]: string; nombre: any;}) => {
        fetch("http://localhost:3002/registro_curso/cursos/"+element['id'])
        .then(dat=>dat.json())
        .then(dat=>{
          this.lineChartLabels.push(element.nombre);
          var val:any=dat.length;
          colection['data'].push(val);
        })
      });
      this.lineChartData.push(colection);
      console.log(colection)
    })
  }

  ngOnInit(): void {

  }



  public chartClicked(e:any):void{
    //console.log(e);
  }
  public chartHovered(e:any):void{
    //console.log(e);
  }


}

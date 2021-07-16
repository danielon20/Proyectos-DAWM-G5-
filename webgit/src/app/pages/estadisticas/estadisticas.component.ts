import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChartType } from 'chart.js';
//import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss'],
  encapsulation: ViewEncapsulation.None,
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
    const output = document.getElementById('cabecera');
    if (output) output.innerHTML =`
        <div class="header" id="cabecera">
          <div class="container">
            <div class="row">
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                  <div class="full">
                      <div class="center-desk">
                        <div class="logo">
                          <i><img src="../../../assets/logoPagina.png" width= "200" height= "50" alt="#" /></i>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                  <nav class="navigation navbar navbar-expand-md navbar-dark ">
                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarsExample04">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                              <a class="nav-link" href="/admin">Panel de Control</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="/mis-cursos"> Mis cursos</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="/estadistica">Estadisticas</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#">Cerrar sesión</a>
                            </li>
                        </ul>
                      </div>
                  </nav>
                </div>
            </div>
          </div>
      </div>
    `;
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

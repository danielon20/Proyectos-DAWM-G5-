import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
//import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
  //encapsulation: ViewEncapsulation.None,
})
export class EstadisticasComponent implements OnInit {

  public lineChartData: Array<any> =[];
  public lineChartData2: Array<any> =[{ data: [], label:'Contactos por mes durante el actual año'}];
  /*
  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Curso de HTML' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Curso de SQL' },
  ];*/
  public lineChartLabels: Array<any> = [];
  public lineChartLabels2: Array<any> = ['Ene', 'Feb','Mar','Abr', 'Mayo','Jun','Jul','Ag','Sept','Oct','Nov','Dic'];

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
  public lineChartOptions2:any={
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
  public lineChartColors2: Array<any> = [
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
  public lineChartLegend2= true;
  public lineChartType2: ChartType = 'bar';


  constructor() {
    this.graficoContactos();
    this.graficoCursos();
  }

  graficoContactos(){
    fetch("http://localhost:3002/contactos")
    .then(data=>data.json())
    .then(data=>{
      console.log(data);
      //var collection:any={data:[0,0,0,0,0,0,0,0,0,0,0,0], label:'Contactos por mes durante el actual año'};
      //console.log(collection)
      data.forEach((element: { fecha: any; }) => {
        var fecha=element.fecha;
        fecha=fecha.split("T");
        fecha=fecha[0];
        fecha=fecha.split("-");
        fecha=fecha[1];
        switch(fecha) {
          case "01": {
            if(this.lineChartData2[0].data[0]==null){
              this.lineChartData2[0].data[0]=1
            }else{
              this.lineChartData2[0].data[0]++;
            }

             break;
          }
          case "02": {
            if(this.lineChartData2[0].data[1]==null){
              this.lineChartData2[0].data[1]=1;
            }else{
              this.lineChartData2[0].data[1]++;
            }
             break;
          }
          case "03": {
            if(this.lineChartData2[0].data[2]==null){
              this.lineChartData2[0].data[2]=1
            }else{
              this.lineChartData2[0].data[2]++;
            }
            break;
          }
          case "04": {
            if(this.lineChartData2[0].data[3]==null){
              this.lineChartData2[0].data[3]=1;
            }else{
              this.lineChartData2[0].data[3]++;
            }
            break;
          }
          case "05": {
            if(this.lineChartData2[0].data[4]==null){
              this.lineChartData2[0].data[4]=1
            }else{
              this.lineChartData2[0].data[4]++;
            }
            break;
          }
          case "06": {
            if( this.lineChartData2[0].data[5]==null){
              this.lineChartData2[0].data[5]=1;
            }else{
              this.lineChartData2[0].data[5]++;
            }

            break;
          }
          case "07": {
            if(this.lineChartData2[0].data[6]==null){
              this.lineChartData2[0].data[6]=1;
            }else{
              this.lineChartData2[0].data[6]++;
            }

            break;
          }
          case "08": {
            if(this.lineChartData2[0].data[7]==null){
              this.lineChartData2[0].data[7]=1;
            }else{
              this.lineChartData2[0].data[7]++;
            }

            break;
          }
          case "09": {
            if( this.lineChartData2[0].data[8]==null){
              this.lineChartData2[0].data[8]=1;
            }else{
              this.lineChartData2[0].data[8]++;
            }

            break;
          }
          case "10": {
            if(this.lineChartData2[0].data[9]==null){
              this.lineChartData2[0].data[9]=1;
            }else{
              this.lineChartData2[0].data[9]++;
            }

            break;
          }
          case "11": {
            if(this.lineChartData2[0].data[10]==null){
              this.lineChartData2[0].data[10]=1;
            }else{
              this.lineChartData2[0].data[10]++;
            }

            break;
          }
          case "12": {
            if( this.lineChartData2[0].data[11]==null){
              this.lineChartData2[0].data[11]=1;
            }else{
              this.lineChartData2[0].data[11]++;
            }
            break;
          }
       }

      });
      console.log( this.lineChartData2[0]);


      //console.log(collection)
      console.log(this.lineChartData2)
      //this.lineChartData2.push(collection);
    })
  }

  graficoCursos(){
    fetch("http://localhost:3002/cursos")
    .then(data=>data.json())
    .then(data=>{
      //console.log(data);
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
      /*console.log(colection)
      console.log(this.lineChartData)*/

      console.log(this.lineChartData[0]);
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

  public chartClicked2(e:any):void{
    //console.log(e);
  }
  public chartHovered2(e:any):void{
    //console.log(e);
  }



}

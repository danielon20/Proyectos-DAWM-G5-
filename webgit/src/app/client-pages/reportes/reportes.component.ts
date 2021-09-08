import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-perfil',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {
  public id: string = '';
  public lineChartData: Array<any> =[];


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



  constructor(private usuariosService : UsuariosService) {
    var stringa = localStorage.getItem('user') || '{}'
    var json = JSON.parse(stringa)
    //Imprime el username que esta guardado en el localStorage
    //console.log(json.username)
    var user = json.username;
    this.usuariosService.getUserClient(user).subscribe(
      res  => {

        var str = JSON.stringify(res)
        var json2 = JSON.parse(str)

        this.id = json2.id;
        //console.log(this.id);

        fetch("http://localhost:3002/registro_curso/"+this.id)
        .then(data=>data.json())
        .then(data=>{
          //console.log(this.id)
          console.log(data);
          var colection:any={data:[], label:'Calificaciones'};


          data.forEach((element: { [x: string]: any; }) => {
            fetch("http://localhost:3002/cursos/"+element['id_curso'])
            .then(dat=>dat.json())
            .then(dat=>{
              this.lineChartLabels.push(dat.nombre);
              colection['data'].push(element['calificacion']);
            })
          });
          this.lineChartData.push(colection);
          console.log(colection)
        })


      },
      err  => {
        console.log(err)
      }
    )




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

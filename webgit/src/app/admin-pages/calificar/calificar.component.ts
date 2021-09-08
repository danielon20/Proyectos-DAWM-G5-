import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante } from '../Interfacez-admin/estudiante';
@Component({
  selector: 'app-calificar',
  templateUrl: './calificar.component.html',
  styleUrls: ['./calificar.component.scss']
})
export class CalificarComponent implements OnInit {

  idCurso:any;
  idEstudiante:any;
  calificacion:any;
  fecha_reg=" "
  curso:any;
  todos_cursos:any;
  estudiantes:any =[];
  estudiantes_finales:any=[]
  nombre=""


  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    var stringa = localStorage.getItem('idCurso') || '{}'
    var idCurso_total=parseInt(stringa)
    console.log(idCurso_total)
    this.idCurso=idCurso_total





  fetch("http://localhost:3002/registro_curso/cursos/"+this.idCurso)
      .then(data=>data.json())
      .then(data=>{
        this.estudiantes = data


      for(let estu of this.estudiantes){
      fetch("http://localhost:3002/cursos/"+estu.id_usuario)
        .then(data=>data.json())
        .then(data=>{
           var usuario=data
          let estu_todo:Estudiante

        estu_todo={
          id_curso:this.idCurso,
          id_usuario:estu.id_usuario,
          fecha:estu.fecha_registro,
          calificacion:estu.calificacion,
          nombre:usuario.nombres,
          apellido:usuario.apellidos,
          usuario:usuario.usuario,

        }
        this.estudiantes_finales.push(estu_todo)
        })
      }

      })


    console.log(this.estudiantes_finales)
  }

  remover(){
    localStorage.setItem("idCurso","1");
  }
}

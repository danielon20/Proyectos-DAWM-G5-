import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Estudiante } from '../Interfacez-admin/estudiante';
@Component({
  selector: 'app-calificar',
  templateUrl: './calificar.component.html',
  styleUrls: ['./calificar.component.scss']
})
export class CalificarComponent implements OnInit {

  idCurso:any;
  nombre_curso=""
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
      fetch("http://localhost:3002/usuarios/"+estu.id_usuario)
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

    fetch("http://localhost:3002/cursos/"+this.idCurso)
      .then(data=>data.json())
      .then(data=>{
        this.nombre_curso = data.nombre

      })
    console.log(this.estudiantes_finales)
  }



  remover(){
    localStorage.setItem("idCurso","1");
  }

  async actualizar(id_us:any){

    var stringa = localStorage.getItem('user') || '{}'
    var json = JSON.parse(stringa)
    var idUser = json.id;
    var estid=parseInt(id_us)




    let resultado = await fetch("http://localhost:3002/registro_curso/user/"+estid+"/course/"+this.idCurso,{
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        puntaje:(document.getElementById(id_us)as HTMLInputElement).value
      })
    })
    console.log(resultado)
    //location.reload()
    Swal.fire({
      title:"Actualización",
      text:"La calificación del usuario",
      icon:"success",
      confirmButtonColor:"#3085d6",
      confirmButtonText:"Ok"


    })

  }



}

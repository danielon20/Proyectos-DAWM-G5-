import { Component, OnInit } from '@angular/core';
import { Curso } from '../Interfacez-admin/curso';
// @ts-ignore
import listaCursos from '../../../assets/json/cursosInfo.json';

@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.component.html',
  styleUrls: ['./mis-cursos.component.scss'],
})
export class MisCursosComponent implements OnInit {
  cursos_viejos:any =[];
  cursos_nuevos:any =[];
  constructor() { }


  ngOnInit(): void {



    fetch("http://localhost:3002/cursos")
    .then(data=>data.json())
    .then(data=>{
      this.cursos_viejos=data;



      for(let curso of this.cursos_viejos){
        fetch("http://localhost:3002/registro_curso/cursos/"+curso.id)
        .then(data=>data.json())
        .then(data=>{

        let curso_todo:Curso

        curso_todo={
            id:curso.id,
            nombre:curso.nombre,
            descripcion:"",
            precio:curso.precio,
            estudiantes:data.length,
            ganancia:data.length*curso.precio,
            linkImagen:curso.linkImagen

        }
        this.cursos_nuevos.push(curso_todo)
        })
      }

  })

  }

  guardarcurso(index:any){


    console.log("hola")
    var idstringa=index.toString()
    console.log(idstringa);

    localStorage.setItem('idCurso',idstringa);

  }




}

import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-vista-curso',
  templateUrl: './vista-curso.component.html',
  styleUrls: ['./vista-curso.component.scss']
})
export class VistaCursoComponent implements OnInit {
  public id: string = '';
  modulo1: any= [];
  modulo2: any= [];
  modulo3: any= [];
  todos_moduls : Array<any>=[];
  idCurso:any;
  nombre_curso="";
  constructor() { }

  ngOnInit(): void {

    var stringa = localStorage.getItem('idCursoE') || '{}'
    var idCurso_total=parseInt(stringa)
    console.log(idCurso_total)
    this.idCurso=idCurso_total


    fetch("http://localhost:3002/tareas/curso/"+this.idCurso)
    .then(res => res.json())
    .then(data => {
        this.todos_moduls=data

        console.log(this.todos_moduls)
        this.modulo1=this.todos_moduls[0]
        this.modulo2=this.todos_moduls[1]
        this.modulo3=this.todos_moduls[2]
        console.log(this.modulo1)
    })

    fetch("http://localhost:3002/cursos/"+this.idCurso)
    .then(res => res.json())
    .then(data => {
        this.nombre_curso=data.nombre
        console.log(this.nombre_curso)
    })




  }



}

import { Component, OnInit } from '@angular/core';
import { Curso } from '../Interfacez-admin/curso';
// @ts-ignore

@Component({
  selector: 'app-nuevo-curso',
  templateUrl: './nuevo-curso.component.html',
  styleUrls: ['./nuevo-curso.component.scss'],
})
export class NuevoCursoComponent implements OnInit {

  curso_nuevo:Curso={
    id:0,
    nombre:"",
    descripcion:"",
    precio:0,
    estudiantes:0,
    ganancia:0,
  }

  constructor() { }

  ngOnInit(): void {

  }




}
function constructor() {
  throw new Error('Function not implemented.');
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}

function crear_curso() {
  throw new Error('Function not implemented.');
}


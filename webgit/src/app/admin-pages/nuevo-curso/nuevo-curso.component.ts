import { Component, OnInit } from '@angular/core';
import { Curso } from '../Interfacez-admin/curso';
import { Router } from '@angular/router';
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
    linkImagen:""
  }


  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  async submitMyCurso(){
    //console.log((document.getElementById("nombreCurso")as HTMLInputElement).value);

    let resultado = await fetch("http://localhost:3002/cursos",{
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        nombre:(document.getElementById("nombreCurso")as HTMLInputElement).value,
        precio:(document.getElementById("precioC")as HTMLInputElement).value,
        descripcion:(document.getElementById("descC")as HTMLInputElement).value,
        imagen:(document.getElementById("imagen")as HTMLInputElement).value
      })
    })
    console.log(resultado)

    let resultado2 = await fetch("http://localhost:3002/tareas",{
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        titulo:(document.getElementById("nombre1")as HTMLInputElement).value,
        subt:(document.getElementById("subtitulo1")as HTMLInputElement).value,
        descripcion:(document.getElementById("info1")as HTMLInputElement).value,
        linkf:(document.getElementById("eva1")as HTMLInputElement).value,
        linkv:(document.getElementById("video1")as HTMLInputElement).value,
      })
    })
    console.log(resultado2)

    let resultado3 = await fetch("http://localhost:3002/tareas",{
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        titulo:(document.getElementById("nombre2")as HTMLInputElement).value,
        subt:(document.getElementById("subtitulo2")as HTMLInputElement).value,
        descripcion:(document.getElementById("info2")as HTMLInputElement).value,
        linkf:(document.getElementById("eva2")as HTMLInputElement).value,
        linkv:(document.getElementById("video2")as HTMLInputElement).value,
      })
    })
    console.log(resultado3)

    let resultado4 = await fetch("http://localhost:3002/tareas",{
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        titulo:(document.getElementById("nombre3")as HTMLInputElement).value,
        subt:(document.getElementById("subtitulo3")as HTMLInputElement).value,
        descripcion:(document.getElementById("info3")as HTMLInputElement).value,
        linkf:(document.getElementById("eva3")as HTMLInputElement).value,
        linkv:(document.getElementById("video3")as HTMLInputElement).value,
      })
    })
    console.log(resultado4)

    this.router.navigateByUrl("/admin/mis-cursos")
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


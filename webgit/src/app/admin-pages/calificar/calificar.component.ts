import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  estudiantes:any;
  nombre=""


  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data=>{
      this.idCurso = data["idCurso"]
      console.log(this.idCurso)
    })
    this.getCurso()
  }

  async getCurso(){
    await fetch("http://localhost:3002/registro_curso/cursos/"+this.idCurso)
      .then(data=>data.json())
      .then(data=>{
        this.estudiantes = data

      })

      await fetch("http://localhost:3002/cursos")
      .then(data=>data.json())
      .then(data=>{
        this.todos_cursos=data


      })


      for(let unocurso of this.todos_cursos){
        if(unocurso.id==this.idCurso){
          this.curso=unocurso
        }
    }

    console.log(this.curso)
  }
}

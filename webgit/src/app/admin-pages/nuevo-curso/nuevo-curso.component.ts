import { Component, OnInit } from '@angular/core';
// @ts-ignore
import listaCursos from '../../../assets/json/cursosInfo.json';

@Component({
  selector: 'app-mis-cursos',
  templateUrl: './nuevo-curso.component.html',
  styleUrls: ['./nuevo-curso.component.scss'],
})
export class NuevoCursoComponent implements OnInit {
  cursos:any =listaCursos;
  constructor() { }

  ngOnInit(): void {





  }

}

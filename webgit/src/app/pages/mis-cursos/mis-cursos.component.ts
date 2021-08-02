import { Component, OnInit } from '@angular/core';
// @ts-ignore
import listaCursos from '../../../assets/json/cursosInfo.json';

@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.component.html',
  styleUrls: ['./mis-cursos.component.scss'],
})
export class MisCursosComponent implements OnInit {
  cursos:any =listaCursos;
  constructor() { }

  ngOnInit(): void {





  }

}

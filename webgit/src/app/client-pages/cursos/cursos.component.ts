import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  cursos:any=[];
  constructor() { }

  ngOnInit(): void {


}

obtnerCursos(id_estu:number){
  fetch("http://localhost:3002/registro_curso/"+id_estu)
.then(data=>data.json())
.then(data=>{
  this.cursos=data;
  console.log(data);
})
}



}


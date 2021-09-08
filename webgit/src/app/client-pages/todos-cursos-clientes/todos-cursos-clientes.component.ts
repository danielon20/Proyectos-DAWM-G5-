import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './todos-cursos-clientes.component.html',
  styleUrls: ['./todos-cursos-clientes.component.scss']
})
export class TodosCursosClientesComponent implements OnInit {
  public id: string = '';
  cursosItems: Array<any> = [];
  constructor(private usuariosService : UsuariosService) { }

  ngOnInit(): void {
    var stringa = localStorage.getItem('user') || '{}'
    var json = JSON.parse(stringa)
    //Imprime el username que esta guardado en el localStorage
    //console.log(json.username)
    var user = json.username;
    this.usuariosService.getUserClient(user).subscribe(
      res  => {

        var str = JSON.stringify(res)
        var json2 = JSON.parse(str)

        this.id = json2.id;
      },
      err  => {
        console.log(err)
      }
    )

    this.loadCursos();
  }



  loadCursos(){
    fetch("http://localhost:3002/cursos")
    .then(res => res.json())
    .then(cursos => {
      fetch("http://localhost:3002/registro_curso/" + this.id)
      .then(res => res.json())
      .then(registrados => {

        var ids: any[] = [];

        for(let j=0; j<registrados.length; j++){
          ids.push(registrados[j]["id_curso"]);
        }


        cursos.forEach((element: { id: any; }) => {
          var cond = ids.indexOf(element.id) != -1;

          if(cond){
            this.cursosItems.push(element);
          }
        });

      })
      //this.cursosItems = cursos;
    })

    console.log(this.cursosItems)
}
}

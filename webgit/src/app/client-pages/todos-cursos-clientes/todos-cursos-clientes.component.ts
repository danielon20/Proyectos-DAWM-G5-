import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-perfil',
  templateUrl: './todos-cursos-clientes.component.html',
  styleUrls: ['./todos-cursos-clientes.component.scss']
})
export class TodosCursosClientesComponent implements OnInit {
  public id: string = '';
  cursosItems: Array<any> = [];
  constructor(private usuariosService : UsuariosService, private router:Router) { }

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

  async deleteRegistro(cursoE: any){
    Swal.fire({
      title:'¿Está seguro que desea abandonar el curso ' + cursoE.nombre + '?',
      text:'Esta acción no se puede deshacer',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Si, Borrarlo'
    })
    .then(respuesta => {
      //Código de Borrado de tu API
      if(respuesta.isConfirmed){
        let resultado = fetch("http://localhost:3002/registro_curso/user/" + this.id + "/course/" + cursoE.id,{
          method: "DELETE",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
          courseId: parseInt(cursoE.id),
          userId:this.id
        })
      })
      Swal.fire('¡Borrado!','El curso ha sido borrado exitosamente','success');
      this.router.navigateByUrl("/client");
     }
    })
  }

  guardarcurso(index:any){


    console.log("hola")
    var idstringa=index.toString()
    console.log(idstringa);

    localStorage.setItem('idCursoE',idstringa);

  }
}

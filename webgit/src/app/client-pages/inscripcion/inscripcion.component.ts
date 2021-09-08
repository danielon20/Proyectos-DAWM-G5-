import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';
//import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  curso: string;
}

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.scss']
})
export class InscripcionComponent implements OnInit {
  public id: string = '';
  cursosItems: Array<any> = [];
  //nombre_curso: string;

  constructor(private usuariosService : UsuariosService, private router:Router) {
    //this.loadCursos();
   }

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
          var cond = ids.indexOf(element.id) == -1;
          
          if(cond){
            this.cursosItems.push(element);
          }
        });      
      })
    })
  }
  
  async submitNewInscripcion(cursoid: any){
    
    let resultado = await fetch("http://localhost:3002/registro_curso",{
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id_curso: parseInt(cursoid),
        id_usuario:this.id,
        fecha_registro: new Date(Date.now()).toISOString(),
        calificacion: 0
      })
    })
    console.log(resultado)
    
    this.router.navigateByUrl("/client/todos-cursos-clientes")
  }

  
}

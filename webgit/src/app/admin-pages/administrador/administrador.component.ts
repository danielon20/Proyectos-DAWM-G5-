import { Component, OnInit} from '@angular/core';

import { UsuariosService } from '../../services/usuarios.service'



@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
  //encapsulation: ViewEncapsulation.None
})

export class AdministradorComponent implements OnInit {
  public currentUser: string = '';

  constructor(private usuariosService : UsuariosService) {
    //this.currentUser = ''
  }

  ngOnInit(): void {


    //Funcion que verificad que hay contenido en el localStorage y usa su informacion para ponerla en el html de administrador
    var stringa = localStorage.getItem('user') || '{}'
    var json = JSON.parse(stringa)
    //Imprime el username que esta guardado en el localStorage
    //console.log(json.username)
    this.currentUser=json.username;


    //Esta funcion obtenia el valor del token del localStorage y se la pasaba despues a getUsuarios; para que este muestre
    //la informacion de todos los usuarios registrados en la base de datos
    /*
    var eltoken = json.token;
    this.usuariosService.getUsuarios(eltoken).subscribe(
      res  => {
        console.log(res)
      },
      err  => console.log(err)

    );
    */
  }

}

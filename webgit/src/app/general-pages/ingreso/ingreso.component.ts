import { Component, OnInit} from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service'

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss']
  //encapsulation: ViewEncapsulation.None
})
export class IngresoComponent implements OnInit {

  usuarios : any = []




  constructor(private usuariosService : UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.getUsuarios().subscribe(
      res  => {
        this.usuarios = res
      },
      err  => console.log(err)

    );

  }
  miFunc(): void {
    for(let value of this.usuarios){
      console.log('Usuario XD')
      console.log(value.usuario)
    }

  }

}

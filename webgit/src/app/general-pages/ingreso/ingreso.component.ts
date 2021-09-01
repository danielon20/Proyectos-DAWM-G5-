import { Component, OnInit} from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

//import {ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss']
  //encapsulation: ViewEncapsulation.None
})
export class IngresoComponent implements OnInit {

  //usuarios : any = []

  miFormulario: FormGroup;
  miFormulario2: FormGroup;


  constructor(private usuariosService : UsuariosService,private router: Router) {
    this.miFormulario = new FormGroup({
      'usuario': new FormControl(),
      'contrasena': new FormControl()
    });
    this.miFormulario2 = new FormGroup({
      'usuario': new FormControl(),
      'contrasena': new FormControl(),
      'contrasena2': new FormControl(),
      'correo': new FormControl()
    });


   }

   miSubmit2() {
    //console.log(this.miFormulario2.value);
    const elUser = {"usuario": this.miFormulario2.value.usuario,
                    "contrasena": this.miFormulario2.value.contrasena,
                    "correo" : this.miFormulario2.value.correo
    }
    this.usuariosService.addUsuarios(elUser).subscribe(
      res  => {
        var x= JSON.stringify(res)
        var y = JSON.parse(x)

        //console.log(y.message);
        Swal.fire({
          title: y.message,
          //text: y.message,
          icon: 'success',
          confirmButtonText: 'Aceptar'
        })


        //this.router.navigate(['/admin']);
      },
      err  => {
        console.log(err)
        /*Swal.fire({
          title: 'Error!',
          text: err.error.message,
          icon: 'error',
          confirmButtonText: 'Aceptar'
        })*/
      }


    )

  }



   miSubmit() {
    //console.log(this.miFormulario.value);
    //console.log(this.miFormulario );
    const elUser = {"usuario": this.miFormulario.value.usuario,
                    "contrasena": this.miFormulario.value.contrasena
    }

    this.usuariosService.login(elUser).subscribe(
      res  => {
        localStorage.setItem('user',JSON.stringify(res));
        //console.log(res);
        var stringa = localStorage.getItem('user') || '{}'
        var json = JSON.parse(stringa)
        if(json.role='Usuario'){
          this.router.navigate(['/client']);
        }
        else{
          this.router.navigate(['/admin']);
        }
      },
      err  => {
        //console.log(err.error.message)
        Swal.fire({
          title: 'Error!',
          text: err.error.message,
          icon: 'error',
          confirmButtonText: 'Aceptar'
        })
      }

    )

  }


  ngOnInit(): void {
    /*this.usuariosService.getUsuarios().subscribe(
      res  => {
        this.usuarios = res
      },
      err  => console.log(err)

    );*/

  }
  /*miFunc(): void {
    for(let value of this.usuarios){
      console.log('Usuario XD')
      console.log(value.usuario)
    }


  }*/

}

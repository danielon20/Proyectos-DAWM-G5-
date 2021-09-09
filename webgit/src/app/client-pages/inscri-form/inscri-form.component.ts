import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inscri-form',
  templateUrl: './inscri-form.component.html',
  styleUrls: ['./inscri-form.component.scss']
})
export class InscriFormComponent implements OnInit {

  constructor(private router: Router
    ) { }

  ngOnInit(): void {


  }

  async cambiarContrasena(){
    var stringa = localStorage.getItem('user') || '{}'
    var json = JSON.parse(stringa)
    var idUser = json.id;

    var contra1=(document.getElementById("contra1")as HTMLInputElement).value
    var contra2=(document.getElementById("contra2")as HTMLInputElement).value

    if(contra1!=contra2){
      Swal.fire({
        title:"Las contraseñas no coinciden",
        text:"Ingrese las contraseñas iguales",
        icon:"error",
        confirmButtonColor:"#3085d6",
        confirmButtonText:"Volver a ingresar"
      })
    }else{
    let resultado = await fetch("http://localhost:3002/usuarios/"+idUser,{
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        contrasena:(document.getElementById("contra1")as HTMLInputElement).value
      })
    })
    console.log(resultado)
    Swal.fire({
      title:"Contraseña cambiada",
      text:"Su contraseña ha sido cambiada correctamente",
      icon:"success",
      confirmButtonColor:"#3085d6",
      confirmButtonText:"Ok"

    })
    this.router.navigateByUrl("/client/perfil")
  }
  }

}

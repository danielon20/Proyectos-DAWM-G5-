import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as introJs from 'intro.js/intro.js';
import { EmptyStatement } from 'typescript';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss']
  //encapsulation: ViewEncapsulation.None
})
export class ContactosComponent implements OnInit {
  introJS = introJs();
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.introJS.start();
  }

  async enviarInfo(){
    var correo=(document.getElementById("correo")as HTMLInputElement).value;
    var nombres=(document.getElementById("nombre")as HTMLInputElement).value;

    console.log(correo);
    console.log(nombres);
    if(correo==""|| nombres==""){
      alert("Debe almenos poner un nombre y un correo")
    }

    let resultado = await fetch("http://localhost:3002/contactos",{
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        mail:correo,
        name:nombres
      })
    })
    console.log(resultado);

    this.router.navigateByUrl("/");
    
    Swal.fire({
      title: 'Hemos recibido tu mensaje, pronto nos contactaremos contigo.',
      //text: y.message,
      icon: 'success',
      confirmButtonText: 'Aceptar'
    })
    
    if(correo.length > 0){
      let correoDetalle = await fetch("http://localhost:3002/email",{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          mail:correo,
          name:nombres
        })
      })
    }

    

    
  }
}

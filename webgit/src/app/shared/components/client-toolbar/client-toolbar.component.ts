import { LogicalProjectPath } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service'

@Component({
  selector: 'app-client-toolbar',
  templateUrl: './client-toolbar.component.html',
  styleUrls: ['./client-toolbar.component.scss']
})
export class ClientToolbarComponent implements OnInit {

  constructor(private usuariosService : UsuariosService) { }

  ngOnInit(): void {
    let arrow = document.querySelectorAll(".arrow")
    for(var i=0; i<arrow.length; i++){
      arrow[i].addEventListener("click", (e)=>{
        let arrowParent = (<HTMLElement>e.target).parentElement?.parentElement;
        arrowParent?.classList.toggle("showMenu")
      })
    }

    let body = document.querySelector("#layoutSidenav_content") as HTMLElement
    let sidenav = document.querySelector(".nav") as HTMLElement
    //let imagen = document.getElementById("logo") as HTMLElement
    sidenav?.addEventListener("mouseleave", ()=>{
      sidenav.style.width = "40px"
      body.style.marginLeft ="10%"
      //imagen.style.visibility="hidden"

      let menu = document.querySelectorAll(".showMenu")
      for(var i=0; i<menu.length; i++){
        menu[i]?.classList.toggle("showMenu")
      }

    })
    sidenav?.addEventListener("mouseover", ()=>{
      sidenav.style.width = "220px"
      body.style.marginLeft ="20%"
    })
  }
  outSesion2(){
    this.usuariosService.logout();
  }
}


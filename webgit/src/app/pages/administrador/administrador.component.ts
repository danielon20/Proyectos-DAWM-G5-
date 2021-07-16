import { Component, OnInit, ViewEncapsulation  } from '@angular/core';


@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdministradorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const output = document.getElementById('cabecera');
    if (output) output.innerHTML =`
        <div class="header" id="cabecera">
          <div class="container">
            <div class="row">
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                  <div class="full">
                      <div class="center-desk">
                        <div class="logo">
                          <i><img src="../../../assets/logoPagina.png" width= "200" height= "50" alt="#" /></i>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                  <nav class="navigation navbar navbar-expand-md navbar-dark ">
                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarsExample04">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                              <a class="nav-link" href="#">Inicio</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="/mis-cursos"> Mis cursos</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="/estadistica">Estadisticas</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#">Cerrar sesión</a>
                            </li>
                        </ul>
                      </div>
                  </nav>
                </div>
            </div>
          </div>
      </div>
    `;

    }

}

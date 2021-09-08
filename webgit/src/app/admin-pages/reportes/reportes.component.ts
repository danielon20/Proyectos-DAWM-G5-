import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {

  constructor() {
    //this.loadUsers();
  }


  ngOnInit(): void {
    fetch("http://localhost:3002/usuarios/rol/user")
      .then(res => res.json())
      .then(clientes => {
        console.log(clientes)
        const vselect = document.getElementById("inputGroupSelect01");

        for(let cliente of clientes){
          let option = `<option value="${cliente["id"]}">${cliente["nombres"]} ${cliente["apellidos"]}</option>`
          //vselect.innerHTML += option;
          //vselect?.innerHTML += option;
          if (vselect) vselect.innerHTML += option;
        }
      })

      const selectElement = document.getElementById("inputGroupSelect01");

      if (selectElement) {
        selectElement.addEventListener('change', (event) => {
          if(event.currentTarget){
            var enlace = `http://localhost:3002/reportes/user/${(<HTMLInputElement>event.target).value}`;

            fetch(enlace)
            .then(res => res.json())
            .then(reportes => {
              let tbody = document.getElementById("ordenes_tablas")

              if (tbody) {
                tbody.innerHTML = "";

                for(let reporte of reportes){
                  let row =
                    `<tr>
                      <td>${reporte["idFactura"]}</td>
                      <td>${reporte["fechaFactura"]}</td>
                      <td>${reporte["idServicio"]}</td>
                      <td>${reporte["precio"]}</td>
                    </tr>`
                  tbody.innerHTML += row;
                }

              }
            });
          }
        });
      }
    //this.loadUsers();
  }
  /*
  loadUsers() {
    window.onload = () => {
      f
      }
    }
  }
  */
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proceso',
  templateUrl: './proceso.component.html',
  styleUrls: ['./proceso.component.scss']
  //encapsulation: ViewEncapsulation.None
})
export class ProcesoComponent implements OnInit {

  mostrarDatos:Boolean =true;
  mostrarPago:Boolean =false;
  mostrarFin:Boolean=false;
  constructor() { }

  ngOnInit(): void {

  }

  showPagos():void{
    this.mostrarDatos=false;
    this.mostrarPago=true;
    this.mostrarFin=false;
  }

  showDatos():void{
    this.mostrarDatos=true;
    this.mostrarPago=false;
    this.mostrarFin=false;
  }

  showFin():void{
    this.mostrarFin=true;
    this.mostrarPago=false;
    this.mostrarDatos=false;
  }



}

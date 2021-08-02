import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as introJs from 'intro.js/intro.js';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss']
  //encapsulation: ViewEncapsulation.None
})
export class ContactosComponent implements OnInit {
  introJS = introJs();
  constructor() { }

  ngOnInit(): void {
    this.introJS.start();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerdos',
  templateUrl: './headerdos.component.html',
  styleUrls: ['./headerdos.component.scss']
})
export class HeaderdosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myFunction(){
    //console.log("XD logrrado XD");
    var x = document.getElementById("navbarsExample04")!;
    var y = document.getElementsByClassName("navbar-toggler")[0];
    if (x.className === "navbar-collapse collapse") {
      x.className += " show";
      y.setAttribute('aria-expanded', 'true');
    } else {
      x.className = "navbar-collapse collapse";
      y.setAttribute('aria-expanded', 'false');
    }

  }


}

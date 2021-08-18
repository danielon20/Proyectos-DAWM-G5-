import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {




  constructor() { }

  ngOnInit(): void {
  }
  myFunction(){
    //console.log("XD logrrado :3");
    var x = document.getElementById("navbarsExample04")!;
    var y = document.getElementsByClassName("navbar-toggler")[0];
    //console.log(x);
    //console.log(y);
    if (x.className === "navbar-collapse collapse") {
      x.className += " show";
      y.setAttribute('aria-expanded', 'true');
      //y.className += " collapsed"
      //y['aria-expanded'] = "true";
    } else {
      x.className = "navbar-collapse collapse";
      y.setAttribute('aria-expanded', 'false');
      //y.className = "navbar-toggler"
      //console.log(y.aria-expanded);
      //y['aria-expanded'] = "false";
    }

  }



}

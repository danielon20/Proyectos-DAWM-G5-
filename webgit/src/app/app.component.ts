import { Component } from '@angular/core';
import*as listaCursos from 'src/assets/json/cursosInfo.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webgit';
  cursosInfo: any = listaCursos;
}




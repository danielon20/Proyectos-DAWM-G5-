import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  API_URI = 'http://localhost:3002'

  constructor(private http: HttpClient) { }


  //Se necescita token para poder obtener todos lo usuarios
  getUsuarios(token: string ){
    const httpOptions = {
      headers: new HttpHeaders({
        'auth': token
      }),
      responseType: 'text' as 'json'
    };
    return this.http.get(`${this.API_URI}/usuarios`,httpOptions)
  }
  getUserClient(userC: any){
    return this.http.get(`${this.API_URI}/usuarios/uname/${userC}`)
  }
  addUsuarios(usuario: any){
    return this.http.post(`${this.API_URI}/usuarios`,usuario)
  }
  login(usuario: any){
    return this.http.post(`${this.API_URI}/auth/login`,usuario)
  }
  logout(){
    localStorage.removeItem('user');
  }
}

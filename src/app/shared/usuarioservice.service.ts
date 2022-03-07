import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsuarioserviceService {

  private url:String = 'http://localhost:3000';
  public estado: boolean = false;
  public usuario: User;
  constructor(private http: HttpClient) { }

  register(usuario:User)
  {
    return this.http.post(`${this.url}/registro`, usuario);
  }

  login(usuario:User)
  {
    return this.http.post(this.url + '/login', usuario)
  }
  
}

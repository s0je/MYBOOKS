import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public perfil: User;
  public profile:string = "assets/img/profile.jpg";

  constructor() { 

      this.perfil = new User ("José", "Silva", "email@cocdenotch.com", "assets/img/profile.jpg", "12345f");
  }

  enviar(nombre:String,apellido:string,email:string,url:string,password:string)
  {
    if(nombre!='')
      this.perfil.nombre = nombre;
    if(apellido!='')
      this.perfil.apellido = apellido;
    if(email!='')
      this.perfil.email = email;
    if(url!='')
      this.perfil.url = url;
    if(password!='')
      this.perfil.password=password;
  }

  ngOnInit(): void {
  }

}

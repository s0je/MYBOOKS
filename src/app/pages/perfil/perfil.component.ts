import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsuarioserviceService } from 'src/app/shared/usuarioservice.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public perfil: User;
  public profile:string = "assets/img/profile.jpg";

  constructor(private usuarioService:UsuarioserviceService) {
    this.perfil = this.usuarioService.usuario[0];
  }
  
  enviar(nombre:String,apellido:string,email:string,url:string,password:string)
  {
    if(nombre!='')
      this.perfil.nombre = nombre;
    if(apellido!='')
      this.perfil.apellidos = apellido;
    if(email!='')
      this.perfil.correo = email;
    if(url!='')
      this.perfil.foto = url;
    if(password!='')
      this.perfil.password=password;
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsuarioserviceService } from 'src/app/shared/usuarioservice.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  constructor(public usuarioService: UsuarioserviceService) { }

  ngOnInit(): void {
  }

  iniciarSesion(correo:string, password:string)
  {
    if(correo && password)
    {
      let usuario = new User('','',correo,'',password)
      this.usuarioService.login(usuario);
    }
  }
}

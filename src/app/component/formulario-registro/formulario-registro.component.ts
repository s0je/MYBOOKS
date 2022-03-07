import { Component, OnInit } from '@angular/core';
import { UsuarioserviceService } from 'src/app/shared/usuarioservice.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  constructor( public usuarioService: UsuarioserviceService) { }

  ngOnInit(): void {
  }

  registrarse(nombre:string, apellidos: string, correo: string, foto: string, password:string, password2: string)
  {
    if(password == password2)
    {
      let usuario = new User (nombre, apellidos, correo,foto, password);
      this.usuarioService.register(usuario);
      console.log(this.usuarioService.usuario)
    }
    else
    {
      console.log("Las contraseñas no coinciden")
    }
    
  }

}

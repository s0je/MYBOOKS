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
      let usuario = new User (0,nombre, apellidos, correo,foto, password);
      console.log(usuario)
      this.usuarioService.register(usuario).subscribe((dato:any) =>
      {
        console.log(dato)
      });
    }
    else
    {
      console.log("Las contraseñas no coinciden")
    }
    
  }

}

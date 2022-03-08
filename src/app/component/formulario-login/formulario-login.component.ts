import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsuarioserviceService } from 'src/app/shared/usuarioservice.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  public usuario: User
  constructor(private usuarioService: UsuarioserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  iniciarSesion(correo:string, password:string)
  {
    if(correo && password)
    {
      let usuario = new User(0,'','',correo,'',password);
      console.log(usuario);
      this.usuarioService.login(usuario).subscribe((data:any) =>
      {
        this.usuarioService.estado = true;
        this.usuarioService.usuario = data;
        this.router.navigateByUrl("/home");
      });
    }
  }
}

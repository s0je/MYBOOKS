import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsuarioserviceService } from 'src/app/shared/usuarioservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  public usuario: User
  public loginForm:FormGroup

  constructor(private usuarioService: UsuarioserviceService, private router: Router, private formBuilder: FormBuilder) { 
    this.buildForm();
  }
  private buildForm()
  {
    this.loginForm = this.formBuilder.group(
      {
        correo: [ , [Validators.required, Validators.email]],
        password: [,Validators.required]
      }
    );
  }
  ngOnInit(): void {
  }

  iniciarSesion()
  {

      console.log(this.loginForm)
      this.usuario = new User(0,'','',this.loginForm.value.correo,'',this.loginForm.value.password);
      this.usuarioService.login(this.usuario).subscribe((data:any) =>
      {
        this.usuarioService.estado = true;
        this.usuarioService.usuario = data;
        this.router.navigateByUrl("/home");
      });
    
  }

  onSubmit(form:NgForm)
  {

  }
}

import { Component, OnInit } from '@angular/core';
import { UsuarioserviceService } from 'src/app/shared/usuarioservice.service';
import { User } from 'src/app/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {
  
  public registroForm: FormGroup;

  constructor( public usuarioService: UsuarioserviceService, private formBuilder: FormBuilder) 
  {
    this.buildform();
    
  }
  
  private buildform()
  {
    const minLength = 8;

    this.registroForm = this.formBuilder.group({
      nombre: [, Validators.required],
      apellidos: [, Validators.required],
      correo: [, [Validators.required, Validators.email]],
      foto: [, Validators.required],
      password: [, [Validators.required, Validators.minLength(minLength)]],
      password2: [, [Validators.required, Validators.minLength(minLength)]]
    })
  }

  

  ngOnInit(): void {
  }

  registrarse()
  {
    if(this.registroForm.value.password == this.registroForm.value.password2)
    {
      let usuario = new User (0, this.registroForm.value.nombre,this.registroForm.value.apellidos,this.registroForm.value.correo,this.registroForm.value.foto,this.registroForm.value.password);
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
  onSubmit(form:NgForm)
  {

  }
}

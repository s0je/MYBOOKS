import { Component, OnInit } from '@angular/core';
import {ServicioService} from 'src/app/shared/servicio.service';
import { Libro } from 'src/app/models/libro';
import { UsuarioserviceService } from 'src/app/shared/usuarioservice.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  

  constructor( public librosService: ServicioService, private usuarioService: UsuarioserviceService) {}
  
  // public libros:any;
  public libros:Libro [];

  enviar(id_usuario:number, titulo:string, tipo:string,autor:string,precio:number,foto:string)
  { 
          
          let libro = new Libro (0,id_usuario, titulo, tipo, autor, precio, foto);
          this.librosService.add(libro).subscribe((dato:any)=>
          {
            console.log(dato);
          })
  }

  editar(id_libro:number,idUsuario:number, title:string, type:string,author:string,price:number,photo:string)
  { 
          let id_usuario:any;
          let titulo:any;
          let tipo:any;
          let autor:any;
          let precio:any;
          let foto:any;
          if(idUsuario)
          {
            id_usuario = idUsuario
          }
          else{
            id_usuario = null
          }
          if(title == '')
            titulo = null
          else
          {
            titulo = title
          }
          if(type == '')
            tipo =null;
          else
          {
            tipo = type
          }
          if(author == '')
            autor = null;
          else
          {
            autor = author;
          }
          if(price)
          {
            precio = price
          }
          else
          {
            precio = null
          }
          if(photo == '')
            foto = null
          else
          {
            foto = photo;
          }

          let libro = new Libro (id_libro, id_usuario, titulo, tipo, autor, precio, foto);
          this.librosService.edit(libro).subscribe((dato:any) =>
          {
            console.log(dato)
          });
          
  }

  eliminar(id_libro:number)
  {
    this.librosService.delete(id_libro).subscribe((dato:any) =>
    {
      console.log(dato)
    })
    
  }

  buscar(id_libro:string)
  {
    console.log(id_libro)
    if(id_libro)
    {
      this.libros = [];
      this.librosService.getOne(Number(id_libro)).subscribe((dato:any) =>
      {
        // this.libros.push(dato[0]);
        console.log(dato)
        if(dato[0] == undefined)
        {
          this.libros = []
          
        }
        else
        {
          this.libros = dato
          
        }
        
      })
    }
    else 
    {
      
      this.librosService.getAll().subscribe((dato:Libro []) =>
       {
          this.libros = dato;
          console.log(dato);
       });
    }   
    console.log(this.libros)
    return this.libros;
  }

  ngOnInit(): void {
  }

}

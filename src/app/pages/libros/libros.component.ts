import { Component, OnInit } from '@angular/core';
import {ServicioService} from 'src/app/shared/servicio.service';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  

  constructor( public librosService: ServicioService) {}
  
  // public libros:any;
  public libros:Libro [];

  enviar(id_libro:number,id_usuario:number, titulo:string, tipoLibro:string,autor:string,precio:number,photo:string)
  { 
          
          let libro = new Libro (id_libro, id_usuario, titulo, tipoLibro, autor, precio, photo);
          this.librosService.add(libro);

  }

  

  editar(id_libro:number,id_usuario:number, titulo:string, tipoLibro:string,autor:string,precio:number,photo:string)
  { 
          console.log(precio)
          let libro = new Libro (id_libro, id_usuario, titulo, tipoLibro, autor, precio, photo);
          this.librosService.edit(libro);
          console.log(libro)

  }

  eliminar(id_libro:number)
  {
    console.log(id_libro)
    let libros = this.librosService.getAll()
    for(let i=0; i<libros.length ; i++)
    {
      if(libros[i].id_libro == id_libro)
      {
        this.librosService.delete(i)
        console.log(i)
      }
    }
  }

  buscar(id:number)
  {
    if(id == 0)
    {
       this.libros = this.librosService.getAll();
    }
    else 
    {
      this.libros = [];
      this.libros.push(this.librosService.getOne(id))
    }   
    console.log(this.libros)
    return this.libros;
  }

  ngOnInit(): void {
  }

}

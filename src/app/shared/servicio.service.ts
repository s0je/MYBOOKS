import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private Libros: Libro []
  constructor() { 

    this.Libros = [ 
      new Libro (1, 1, "Los pilares de la tierra", "Ciencia ficcion", "Ken Follett", 20, "https://images-na.ssl-images-amazon.com/images/I/91+I2lzZ4JL.jpg"),
      new Libro (2, 1,"El Hobbit", "Fantasia", "JRR Tolkien", 15, "https://images-na.ssl-images-amazon.com/images/I/91v16gReBcL.jpg"),
      new Libro (3,1,"La estrella de los Elfos", "Fantasía", "Margaret Weis y Tracy Hickman", 10, "https://images-na.ssl-images-amazon.com/images/I/71m6ufQppFL.jpg")]
  }

  public getAll():Libro []
  {
    return this.Libros
  }

  public getOne(id_libro:number):Libro
  {
    for(let i=0; i<this.Libros.length; i++)
    {
      if(this.Libros[i].id_libro == id_libro)
      {
        return this.Libros[i];
      }
    }
  }

  public add(libro:Libro):void
  {
    this.Libros.push(libro);
  }
  
  public edit(libro:Libro):boolean
  {
    for(let i=0; i<this.Libros.length; i++)
    {
      if(this.Libros[i].id_libro == libro.id_libro)
      {
        if(libro.id_usuario != 0)
        this.Libros[i].id_usuario = libro.id_usuario;
        if(libro.titulo != '')
        this.Libros[i].titulo = libro.titulo;
        if(libro.tipoLibro != '')
        this.Libros[i].tipoLibro = libro.tipoLibro;
        if(libro.autor !='')
        this.Libros[i].autor = libro.autor;
        if(libro.precio != 0)
        this.Libros[i].precio = libro.precio;
        if(libro.photo != '')
        this.Libros[i].photo = libro.photo;

        console.log(this.Libros[i])
        
        return true
      }
      else
      {
        return false
      }
    }
  }

  public delete(id_libro:number):boolean
  {
    
        this.Libros.splice(id_libro,1,);

        return true;
  }
}

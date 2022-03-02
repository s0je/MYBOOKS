import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public libros: Libro[];

  constructor() {
    
        // this.libros = []

    this.libros = [ 
      new Libro (1, 1, "Los pilares de la tierra", "Ciencia ficcion", "Ken Follett", 20, "https://images-na.ssl-images-amazon.com/images/I/91+I2lzZ4JL.jpg"),
      new Libro (2, 1,"El Hobbit", "Fantasia", "JRR Tolkien", 15, "https://images-na.ssl-images-amazon.com/images/I/91v16gReBcL.jpg"),
      new Libro (3,1,"La estrella de los Elfos", "Fantasía", "Margaret Weis y Tracy Hickman", 10, "https://images-na.ssl-images-amazon.com/images/I/71m6ufQppFL.jpg")]
  }

  enviar(id_libro:number,id_usuario:number, titulo:string, tipoLibro:string,autor:string,precio:number,photo:string)
  { 
          let libro = new Libro (id_libro, id_usuario, titulo, tipoLibro, autor, precio, photo);
          this.libros.push(libro);

  }

  ngOnInit(): void {
  }

}

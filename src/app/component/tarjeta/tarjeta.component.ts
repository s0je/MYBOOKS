import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() Libros: Libro;
  @Output() eventoEliminar = new EventEmitter<Number>()

  constructor() { }

  eliminar(id_libro:number)
  {
    this.eventoEliminar.emit(id_libro);
  }

  ngOnInit(): void {
  }

}


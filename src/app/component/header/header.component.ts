import { Component, OnInit } from '@angular/core';
import { UsuarioserviceService } from 'src/app/shared/usuarioservice.service'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public usuarioService: UsuarioserviceService) { }

  ngOnInit(): void {
  }

}

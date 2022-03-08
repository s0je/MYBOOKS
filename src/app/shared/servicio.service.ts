import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private Libros: Libro [];
  private url:String = 'http://localhost:3000';
  constructor( private http: HttpClient) {}
 
  getAll():Observable <Object>
  {
    
    return this.http.get(this.url+"/libros")
    
  }

  getOne(id_libro:number):Observable <Object>
  {
    
    return this.http.get(this.url+"/libros?id="+id_libro)
  }

  add(libro:Libro):Observable <Object>
  {
    return this.http.post(this.url+"/libros",libro)
  }
  
  edit(libro:Libro):Observable <Object>
  {
    return this.http.put(this.url+"/libros", libro)
  }

  delete(id_libro:number):Observable <Object>
  {
    return this.http.delete(this.url+"/libros?id="+id_libro);
  }
}

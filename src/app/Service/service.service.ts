import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libreria } from '../Modelo/Libreria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:80/prtheylib/libreria';

  getLibro():Observable<any>{
    return this.http.get<Libreria[]>('http://localhost/prtheylib/libreria');
  }

  getAll():Observable<any>{
    return this.http.get<any>('http://localhost/prtheylib/libreria');
  }

  createLibro(libreria:Libreria){
    return this.http.post<Libreria>(this.Url,libreria);
  }

  public mostrarEntidad() {
    return this.http.get('http://localhost/prtheylib/libreria');
  }

  getLibroId(id:number){
    return this.http.get<Libreria>(this.Url+"/"+id);
  }

  UpdateLibro(libro:Libreria){
    return this.http.put<Libreria>(this.Url+"/"+libro.id,libro);
  }

  BorrarLibro(libro:Libreria){
    return this.http.delete<Libreria>(this.Url+"/"+libro);
  }

}


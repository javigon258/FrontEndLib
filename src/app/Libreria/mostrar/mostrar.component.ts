import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Libreria } from '../../Modelo/Libreria';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  librerias:Libreria[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getLibro()
    .subscribe(data=>[
      this.librerias=data
    ])
  }

  public listarEntidad(){
    this.service.mostrarEntidad().subscribe(
        (success:any)=>{
            console.log(success);//el success contiene tu respuesta
        },
        (error)=>{
            console.log("algo ocurrio: ",error)
        }
   );
  }

  Editar(libro:Libreria):void{
    localStorage.setItem("id",libro.id.toString());
    this.router.navigate(["editar"]);
  }

  Borrar(libro:Libreria){
    this.service.BorrarLibro(libro)
    .subscribe(data=>{
      this.librerias= this.librerias.filter(l=>l!==libro);
      alert("Libro borrado.");
    })
  }
}

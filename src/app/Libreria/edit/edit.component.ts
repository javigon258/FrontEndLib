import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Libreria } from '../../Modelo/Libreria';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  libro:Libreria = new Libreria();
  constructor(private router:Router, private serv: ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id = localStorage.getItem("id");
    this.serv.getLibroId(+id)
    .subscribe(data=>{
      this.libro = data;
    })

  }

  Actualizar(libro:Libreria){
    this.serv.UpdateLibro(libro).subscribe(data=>{
      this.libro = data;
      alert("Se ha actualizado el libro.");
    })
  }

}

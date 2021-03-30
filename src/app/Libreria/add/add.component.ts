import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Libreria } from '../../Modelo/Libreria';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  guardar(libreria:Libreria){
    this.service.createLibro(libreria)
    .subscribe(data=>{
      alert("Se añadio un nuevo libro");
      this.router.navigate(["mostrar"]);
    })
  }

}

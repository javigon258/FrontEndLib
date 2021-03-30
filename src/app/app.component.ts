import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from './Service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServiceService]
})
export class AppComponent {
  title = 'PrTheyLib';

  constructor(private router:Router){}

  Mostrar(){
    this.router.navigate(["mostrar"]);
  }

  Nuevo(){
    this.router.navigate(["nuevo"]);
  }

  /*ngOnInit(){
    this.dataSvc.getAll().subscribe((res) =>{
      console.log('Res',res);
    })
  }*/

}

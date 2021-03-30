import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarComponent } from './Libreria/mostrar/mostrar.component';
import { AddComponent } from './Libreria/add/add.component';
import { EditComponent } from './Libreria/edit/edit.component';

const routes: Routes = [
  {path:'mostrar', component:MostrarComponent},
  {path:'nuevo', component:AddComponent},
  {path:'edit', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

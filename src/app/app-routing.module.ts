import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaComponent } from './components/mapa/mapa.component';
import { Actividad2Component } from './components/actividad2/actividad2.component';




const routes: Routes = [

  {
    path: '',
    component: MapaComponent
  },
  {
    path: 'actividad',
    component: Actividad2Component
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

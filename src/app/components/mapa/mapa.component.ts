import { Component } from '@angular/core';
import { Actividad1Component } from '../actividad1/actividad1.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {

  constructor(private router:Router){}

  claseSubmenu = true;


  cambiarClase(){
    this.claseSubmenu = !this.claseSubmenu;
  }

  redireccionar1(){
    this.router.navigate([''])
  }

  redireccionar2(){
    this.router.navigate(['actividad'])
  }


}

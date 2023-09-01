import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actividad2',
  templateUrl: './actividad2.component.html',
  styleUrls: ['./actividad2.component.css']
})
export class Actividad2Component {

  constructor(private router:Router){}

  claseSubmenu = true;

  primerarespuesta = 0;
  retroalimentacioncorrecta1 = false;
  retroalimentacionincorrecta1 = false;
  segundarespuesta = 0;
  retroalimentacioncorrecta2 = false;
  retroalimentacionincorrecta2 = false;
  tercerarespuesta = 0;
  retroalimentacioncorrecta3 = false;
  retroalimentacionincorrecta3 = false;
  cuartarespuesta = 0;
  retroalimentacioncorrecta4 = false;
  retroalimentacionincorrecta4 = false;


  cambiarClase(){
    this.claseSubmenu = !this.claseSubmenu;
  }


  redireccionar1(){
    this.router.navigate([''])
  }

  redireccionar2(){
    this.router.navigate(['actividad'])
  }

  corregir(){
    if(this.primerarespuesta == 4){
      this.retroalimentacioncorrecta1 = true;
      this.retroalimentacionincorrecta1 = false;
    }else{
      this.retroalimentacionincorrecta1 = true;
      this.retroalimentacioncorrecta1 = false;
    }
    if(this.segundarespuesta == 10){
      this.retroalimentacionincorrecta2 = false;
      this.retroalimentacioncorrecta2 = true;
    }else{
      this.retroalimentacionincorrecta2 = true;
      this.retroalimentacioncorrecta2 = false;
    }
    if(this.tercerarespuesta == 5){
      this.retroalimentacionincorrecta3 = false;
      this.retroalimentacioncorrecta3 = true;
    }else{
      this.retroalimentacionincorrecta3 = true;
      this.retroalimentacioncorrecta3 = false;
    }
    if(this.cuartarespuesta == 8){
      this.retroalimentacionincorrecta4 = false;
      this.retroalimentacioncorrecta4 = true;
    }else{
      this.retroalimentacionincorrecta4 = true;
      this.retroalimentacioncorrecta4 = false;
    }


  }


}

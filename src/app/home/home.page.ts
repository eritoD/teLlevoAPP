import { Component } from '@angular/core';
import { Animation,AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  private animation:Animation 
  constructor(private aCrl:AnimationController) {}

  ngOnIt(){}//se ejecuta al inicio la pagina
  ngAfterViewInit(){//inmediatamente despues de ngOnDestroy
    this.animation = this.aCrl.create()
    .addElement(document.querySelector('.square') as HTMLElement) //el elemento que voy a referenciar
    .duration(1500) //cuanto dura la animacion en ms
    .interations(2) //la cantidad de veces que se ejecuta la animacion
    .fromTo('','','')//animacion
  
  
  } 
  ngOnDestroy(){}//se ejecuta al cerrar la pagina
  



}

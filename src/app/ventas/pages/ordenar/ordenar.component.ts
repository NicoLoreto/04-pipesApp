import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';
import { __values } from 'tslib';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',

})


export class OrdenarComponent {

  palabra: string = 'monolito';

  boolean: boolean = true;

  ordenarPor: string = '';

  heroes: Heroe[] = [

    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },

    {
      nombre: 'El Zorro',
      vuela: false,
      color: Color.negro
    },

    {
      nombre: 'Peter Pan',
      vuela: true,
      color: Color.verde
    },

    {
      nombre: 'El Caballero Rojo',
      vuela: false,
      color: Color.rojo
    },

    {
      nombre: 'Jordan',
      vuela: true,
      color: Color.negro
    }

  ]

  cambiarBoolean(){

    // if(this.boolean){
    //   this.boolean = false
    // }else{
    //   this.boolean =true
    // }

    // cambia de estado en menos lineas
    this.boolean = !this.boolean

  }

  cambiarOrden(valor: string){

    this.ordenarPor = valor

  }


}

import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  // ...args con los tres puntos sera solo el primer argumento, sin los tres puntos seran todos los argumentos que se envien

  transform(heroes: Heroe[], orderPor: string = '' ): Heroe[] {

    //puede usarse switch para cada caso, si ordenarPor tiene el valor de nombre (tambien esta asi en el boton) 
    // retornara el orden por nombre, y asi sucesivamente

    switch(orderPor){
      case 'nombre':
        // para sort se usa una funcion compa
      // rativa. 1 si necesito cambiarlo y -1 para el cambio inverso
        return heroes = heroes.sort((a,b) => (a.nombre > b.nombre) ? 1 : -1);

        case 'vuela':
          return heroes = heroes.sort((a,b) => (a.vuela > b.vuela) ? -1 : 1);
        
          case 'color':
            return heroes = heroes.sort((a,b) => (a.color > b.color) ? 1 : -1)  
      

      default:
        return heroes
    }




    }

  }

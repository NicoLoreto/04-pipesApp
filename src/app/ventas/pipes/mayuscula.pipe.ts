import { Pipe, PipeTransform } from "@angular/core";
import { __values } from "tslib";


// para crear un pipe angular tiene comandos especificos.
// para hacerlo manual hay que crear un archivo con .pipe.ts
// dentro de una carpeta pipes
// se crea una clase para el pipe
// el decorador indica que es un Pipe, la propiedad name es obligatoria
// el name sera el nombre del pipe, asi se va a usar
// se necesita implentar el PipeTransform, sera la funcion que se ejecutara
// transform puede retornar cualquier cosa, number, etc.
// lo que retorna sera return

// se implementan de la izquierda a la derecha

// para generarlo desde la terminal
// ng g pipe ventas/pipes/ordenar


@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
 
// transform necesita del parametro value

    transform(valor: string, enMayuscula: boolean = true): string {
       
        // if(enMayuscula){
        //     return valor.toUpperCase()
        // }else{
        //     return valor.toLowerCase()
        // }

        return (enMayuscula ? valor.toLocaleUpperCase() : valor.toLowerCase());
        
    }
}
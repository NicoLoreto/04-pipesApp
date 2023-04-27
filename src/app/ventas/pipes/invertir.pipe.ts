import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'invertir'
})
export class InvertirPipe implements PipeTransform {

    transform(valor: string): string {
    
        let array: string [] = valor.split('')
        let newArray: string[] = [];
   
        for(let i = 0; i < array.length; i++){
           newArray.unshift(array[i])
   
        }
        return newArray.join('')
   
           }
           
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',

})
export class BasicosComponent {

  nombreLower: string = 'Mario';
  nombreUpper: string = 'MARIO';
  nombreCompleto: string = 'mArio SanTos';


  fecha: Date = new Date()

}

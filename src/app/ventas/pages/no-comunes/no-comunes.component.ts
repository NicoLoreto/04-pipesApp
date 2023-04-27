import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',

})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Laura'
  genero: string = 'femenino'

  invitacionMapa: {} = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural

  clientes: string [] = [
    "maria", "jose", "bacanera", "azucar"
  ];

  // other es como un else, cualquier valor que no este especificado antes
  // # se usa para que transfiera el valor que estamos reciendo en el html
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarUsuario(){
    this.nombre = "Nico"
    this.genero = "masculino"
  }

  borrarUsuario(){
    this.clientes.shift()
  }

  //KeyValuePipe

  persona = {
    nombre: 'Nicolas',
    edad: 33,
    direccion: 'Rosario, Argentina'
  }

  //JsonPipe

  heroes = [

  {
    nombre: 'Superman',
    vuela: true,
  },
  {
    nombre: 'Batman',
    vuela: false,
  },
  {
    nombre: 'El Zorro',
    vuela: false,
  },
  {
    nombre: 'Maradona',
    vuela: true,
  }
];

// Async Pipe

//funciona sobre obsrvable o promesas
// un interval recibe como argumento un periodo, este emitira valores 
//numericos en un intevalo de 5 segundos

  miObservable = interval(5000);

// como promesas recibe un callback con la funcion resolve y reject
// si hay error, pasados 5s mostrara el resultado


valorPromesa = new Promise((resolve, reject) => {

  //setTimeout() es una función de JavaScript que se utiliza para programar una tarea que se ejecutará después de un tiempo específico en milisegundos. 
  
  setTimeout(() => {
    resolve('Tenemos data de promesa')
  }, 5000)

})






}

// trabajar con enumeraciones es como trabajar con
// valores numericos pero con palabras


export enum Color{

    rojo, negro, azul, verde

}

export interface Heroe{

    nombre: string;
    vuela: boolean;
    color: Color;
    
}

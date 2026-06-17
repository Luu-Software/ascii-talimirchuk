import { preguntar } from './lib/consola.ts';

function repetirLetra(letra: string, cantidad: number): string {
  let resultado: string = "";
  let contador: number = 0;

  while (contador < cantidad) {
    resultado = resultado + letra;
    contador = contador + 1;
  }

  return resultado;
  // COMPLETAR o importar desde index.ts
}

function filaTrianguloIsoceles(letra: string, fila: number, tamaño: number): string {
  let cantidadCaracteres: number = 2 * fila + 1;
  let cantidadEspacios: number = tamaño - fila;
  let espacios: string = repetirLetra(" ", cantidadEspacios);
  let caracteres: string = repetirLetra(letra, cantidadCaracteres);
  return espacios + caracteres + espacios;
}

let caracter: string = preguntar('¿Con que caracter vas a dibujar el triángulo? ');
let tamaño: number = Number(preguntar('¿De qué tamaño? '));
let tipo: string = preguntar('¿Qué tipo de triángulo? (isoceles, rectangulo) ');

let fila: number = 0;

if (tipo === "rectangulo") {
    while (fila < tamaño) {
      console.log(repetirLetra(caracter,fila + 1));
      fila = fila + 1;
    }
}

if (tipo === "isoceles") {
  fila = 0;

  while (fila < tamaño) {
    console.log(filaTrianguloIsoceles(caracter, fila, tamaño));
    fila = fila + 1;
  }
}
// COMPLETAR
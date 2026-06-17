import { preguntar } from './lib/consola.ts';

function repetirLetra(letra: string, cantidad: number): string {
  let resultado: string = "";
  let contador: number = 0;

  while (contador < cantidad) {
    resultado = resultado + letra;
    contador = contador + 1;
  }

  return resultado;
}

let caracter: string = preguntar('¿Con que caracter vas a dibujar el cuadrado? ');
let tamaño: number = Number(preguntar('¿De qué tamaño? '));

let fila: number = 0;
let contadorFilas: number=0;
while (fila<tamaño) {
  console.log(repetirLetra(caracter, tamaño));
  fila = fila + 1;

}

// COMPLETAR

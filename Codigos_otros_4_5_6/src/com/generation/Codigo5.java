package com.generation;

import java.util.Scanner;// se importo este paquete para scanner

public class Codigo5 {
	public static void main(String[] args) {//se agrego class main
    Scanner s = new Scanner(System.in);// se asigno System.in
    System.out.print("Introduzca un número: ");//se remplazo comillas simples por dobles
    int ni = s.nextInt();//se cambio el tipo de dato, string por int al igual que nextLine por nextInt 
    int c = ni;
   
    int afo = 0;
    int noAfo = 0;
    
    while (ni > 0) {
	  int digito =(ni % 10);//se quito (int) en esta linea 
	  if ((digito == 3) || (digito == 7) || (digito == 8) || (digito == 9)) {
		afo++;
      } else {
		noAfo++;
	  
    }
	  ni /= 10;//se saco esta instruccion del bloque del else y se puso en este bloque para terminar con el ciclo

    if (afo > noAfo) {
      System.out.println("El " + c + " es un número afortunado.");
    } else {
      System.out.println("El " + c + " no es un número afortunado.");
    }
    
  }
	}
}

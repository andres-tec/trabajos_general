package com.generation;

import java.io.Console;
import java.util.Scanner;// se importo este package con el fin de scanear el buffer de entrada

public class Codigo6 {

	public static void main(String[] args) {// se agrego classe main 

			Scanner s = new Scanner(System.in); // se declaro esta sentencia que permite escanear
		    int[] n =new int[20];

		    for (int i = 0; i < 20; i++) {
		      n[i] = (int) ((Math.random() * 381) + 20);//correccion de parentesis 
		      System.out.println(n[i] + " ");//correccion de system.in
		    }
		    
		    System.out.println("\n¿Qué números quiere resaltar? ");
		    System.out.print("(1 – los múltiplos de 5, 2 – los múltiplos de 7): ");
		    int opcion = s.nextInt();// se ha cambiado esta seccion pues tenia un parseInt
		  
		    int multiplo = (opcion == 1)?5:7;//se estructuro adecuadamente el if ternario 

		    for (int e : n) {// se ha corregido de foereach a for 
		      if (e % multiplo == 0) {
		        System.out.print("[" + e + "] ");
		      } else {//cierre del if 
		        System.out.print(e + " ");
		      }//cierre del else 

		    }//cierre del foreach
		}//cierre del main
}//cierre de la clase Codigo6

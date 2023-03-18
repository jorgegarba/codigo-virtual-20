Proceso calculadora
	Definir numero1 Como Entero;
	Definir numero2 Como Entero;
	Definir suma Como Entero;
	Definir resta Como Entero;
	Definir producto Como Entero;
	Definir  cociente Como Real;
	
	//proceso
	Escribir 'ingresa el numero ';
	Leer numero1;
	Escribir 'ingresa el numero 2';
	Leer  numero2;
	
	suma = numero1 + numero2;
	resta = numero1 - numero2;
	producto = numero1 * numero2;
	
	si (numero2=0) Entonces
		Escribir  'no se puede dividir entre 0';
		cociente=0;
	SiNo
		cociente = numero1 / numero2;
	FinSi
	
	
	//salida
	
	Escribir 'suma forma 1 : ' , (suma);
	Escribir 'suma forma 2 ' , numero1 + numero2;
	Escribir 'resta' , (resta);
	Escribir 'producto' , (producto);
	Escribir 'cociente ' , (cociente);
	
FinProceso

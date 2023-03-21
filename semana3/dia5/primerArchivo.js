const numero1 = 50;
const numero2 = 30;
let resultado = 0;
let resta = 0;

resultado = numero1 + numero2;
resta = numero1 - numero2;

// console.log  escribir el mensaje o ejcuacion en la consola

console.log('el resultado de la suma es ' + resultado);
console.log('el resultado de la resta es ' + resta);
console.log(numero1);
console.log('guillermo');

// alert = ventana emergente del navegador .
// console.log es la funcion que imprime en consola una ejecucion o valorque comtenga
//prompor es una ventana emergene de entrada de datos  te permite ingresas un valor

//-----------------------------------------------
//vamos hacer una calculadora
//abrir una venta alerta donde podra imngresar
//y esa valor se guradara en una variable

//necesito que el usuario ingres el tipo de operacion
//+ - * /

const valor1 = prompt('ingrese valor 1');
const valor2 = prompt('ingrese valor 2');

const operacion = prompt('ingrese una operacion puede ser +,-,*,/');
let resultadoCalculadora = 0;

//ParseInt = convierte el string en number
//la forma moderna de anteponiendo el signo +valor1
//toString = conviwerte un number en string
//ParsefLoat =  decimales ..

if (operacion === '+') {
	resultadoCalculadora = +valor1 + +valor2;
	console.log('resultado', resultadoCalculadora);
} else if (operacion === '-') {
	resultadoCalculadora = +valor1 - +valor2;
	console.log('resultado', resultadoCalculadora);
}

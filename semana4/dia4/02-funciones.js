// console.log(promedioDosNumeros(2, 4));

function promedioDosNumeros(num1, num2) {
  return (num1 + num2) / 2;
}

const calcularEdad = (anioNacimiento) => {
  return 2023 - anioNacimiento;
};
// console.log(calcularEdad(2000));

const calcularEdad2 = (anioNacimiento) => 2023 - anioNacimiento;
// console.log(calcularEdad2(2000));

const sumarNNumeros = (...numeros) => {
  // console.log(numeros);
  // [2, 4]
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    // suma += numeros[i];
    suma = suma + numeros[i];
  }
  return suma;
};
// console.log(sumarNNumeros(2, 4));
// 6

const concatenarCadenas = (...cadenas) => {
  return cadenas.join(" ");
};
// console.log(concatenarCadenas("Hola", "Mundo", "JS", "2023", "CodiGo"));
// Hola Mundo JS 2023 CodiGo

const ternarios = (num1, num2) => {
  return num1 !== num2 ? "Son diferentes" : "Son iguales";
};
// console.log(ternarios(13, 27));

const ternarios2 = (acepto) => {
  return acepto ? "Acepto" : "No acepto";
};
console.log(ternarios2(true));
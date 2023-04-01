function validarSiEsNumero(numero,tipo){
    return isNaN(numero) ? `Mensaje Error : no se puede ${tipo}` : numero;
}


function sumar(numero1,numero2){
    const suma = +numero1 + +numero2;

    return validarSiEsNumero(suma , "sumar")

}
function restar(numero1,numero2){
    const resta = +numero1 - +numero2;

    return validarSiEsNumero(resta , "restar")

}
function multiplicar(numero1,numero2){
    const multiplicar = +numero1 * +numero2;

    return validarSiEsNumero(multiplicar , "multiplicar")

}

function dividir (numero1,numero2){
    if(+numero2 === 0){
      //terminha ala ejecucio de una funcion
        return "Error: no se puede dividir por 0"
    }
    const calcDivision = +numero1 / + numero2;
    
    return validarSiEsNumero(calcDivision,"dividir")

}

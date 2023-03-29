/**
 * Propiedades de los strings
 */
let frase = 'Los programadores crean lo que las personas sueñan.';
console.log(frase);
/**
 * length
 * retorna la cantidad de caracteres de un string
 */
console.log('length', frase.length);

/**
 * toLowerCase()
 * retorna el string en minúsculas
 */

console.log('toLowerCase', frase.toLowerCase());

/**
 * toUpperCase()
 * retorna el string en mayúsculas
 */
console.log('toUpperCase', frase.toUpperCase());

/**
 * trim()
 * retorna el string sin espacios en blanco a los extremos
 * en caso el string tuviera dichos espacios
 */
console.log('trim', '     Hola    mundo    '.trim());

/**
 * ? parametro opcional
 * substr(comienzo, extension?)
 * Devuelve una subcadena desde la posición "comienzo"
 * incluyendo "extension" caracteres en adelante
 * Si no se manda la extensión, el retorno será desde
 * la posición "comienzo" hasta el final
 */

console.log('frase desde la posicion 9 por 4 caracteres');
console.log(frase.substr(9, 4));

/**
 * ? parametro opcional
 * substring(comienzo, final)
 * Devuelve una subcadena desde la posición "comienzo"
 * hasta la posición "final"
 */

console.log('frase desde la posicion 9 hasta la posición 13');
console.log(frase.substring(9, 13));

/**
 * startsWith(texto)
 * devuelve true si el strnig inicia con el parámetro
 * "texto"
 */
console.log(frase.startsWith('Los pro'));

/**
 * endsWith(texto)
 * devuelve true si el string finaliza con el parámetro
 * "texto"
 */

console.log(frase.endsWith('sueñan.'));

/**
 * includes(texto,posicion?)
 * devuelve true si el string contiene el parámetro "texto"
 * desde la posición "posicion"; si éste último parámetro no
 * se ha etablecido, el texto es buscado desde el inicio de la
 * cadena
 */

console.log(frase.includes('crean'));

/**
 * indexOf(texto,posición?)
 * retorna la posición en la que inicia el texto "texto"
 * dentro del string a partir de la posición "posición".
 * Si éste último parámetro no se ha establecido, la
 * búsqeuda se realiza desde el inicio de la cadena
 */

console.log(frase.indexOf('crean'));

/**
 * La clase Date sirve para manipular
 * fechas
 */

let hoy = new Date();
console.log('hoy', hoy);

/**
 * getFullYear();
 * retorna el año de la variable hoy
 */

console.log('año', hoy.getFullYear());

/**
 * getMonth();
 * retorna el número del mes iniciando en
 * 0
 */
const meses = [
	'ene',
	'feb',
	'mar',
	'abr',
	'may',
	'jun',
	'jul',
	'ago',
	'sep',
	'oct',
	'nov',
	'dic'
];
console.log('mes', hoy.getMonth() + 1);
console.log('mes', meses[hoy.getMonth()]);

/**
 * getDate()
 * retorna el número del día del mes
 */

console.log('dia del mes', hoy.getDate());
/**
 * getHours()
 * getMinutes()
 * getSeconds()
 */

console.log(hoy.getHours());
console.log(hoy.getMinutes());
console.log(hoy.getSeconds());

/**
 * getDay()
 * retorna el número del día de la semana
 */

const dias = ['dom', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab'];
console.log('día de la semana', dias[hoy.getDay()]);

/**
 * inicializando fechas distintas a hoy
 */

let fiestasPatrias = new Date(2023, 6, 28, 0, 0, 0);
console.log('28 julio es: ', fiestasPatrias);

/**
 * restando fechas
 */

console.log('fiestas patrias menos hoy', fiestasPatrias - hoy);

const milisegundos = fiestasPatrias - hoy;
const diasPara28Julio = milisegundos / 1000 / 60 / 60 / 24;
console.log('días para 28 Julio', diasPara28Julio);

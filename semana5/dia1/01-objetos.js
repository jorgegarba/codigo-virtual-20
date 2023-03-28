// OBJETOS
const persona = {
	nombre: 'Yuli',
	dni: '12345678',
	telefono: '97889485',
	idiomas: ['Español', 'Inglés', 'Francés']
};

console.log('telefono', persona.telefono);
console.log('idiomas', persona.idiomas);

// Inyectando un nuevo idioma

persona.idiomas.push('Aymara');
console.log('persona actualizada', persona);

// Modificando el teléfono
persona.telefono = '999999999';
console.log('persona actualizada', persona);

// Agregando un nuevo atributo a la persona (no se recomienda agregar nuevos
// atributos a un objeto)
persona.direccion = {};
persona.direccion.calle = 'Lima';
persona.direccion.distrito = 'Miraflores';
persona.direccion.ciudad = 'Arequipa';

console.log('persona actualizada', persona);

// Agregando un atributo a la persona (forma 2)
persona.estudios = {
	primaria: 'Escuela De Los Andes',
	secundaria: 'Colegio Nuestra Señora De Fatima',
	superior: 'UNMSM'
};
console.log('persona actualizada', persona);

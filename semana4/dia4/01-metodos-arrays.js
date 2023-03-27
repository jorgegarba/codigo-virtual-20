const alumnos = ["Juan", "Pedro", "Maria", "Jose", "Luis", "Maria"];

// for
for (let index = 0; index < alumnos.length; index++) {
  // console.log(index, alumnos[index]);
}

// forEach (no devuelve nada)
let alumnosSoloMaria = [];
alumnos.forEach((alumno, index) => {
  // console.log(alumno, index)
  if (alumno === "Maria") {
    alumnosSoloMaria.push(alumno + " " + "Perez");
  }
});
// console.log(alumnosSoloMaria)
// ["Maria Perez", "Maria Perez"]

// map (devuelve un array nuevo)
const nuevosAlumnos = alumnos.map((alumno, index) => {
  return `${alumno} ${index}`;
});
// console.log(nuevosAlumnos);
// ["Juan 0", "Pedro 1", "Maria 2", "Jose 3", "Luis 4", "Maria 5"]

//filter (devuelve un array nuevo)
const alumnosSinMaria = alumnos.filter((alumno, index) => {
  return alumno !== "Maria";
});
// console.log(alumnosSinMaria);
// ["Juan", "Pedro", "Jose", "Luis"]

// find  (devuelve el elemento)
const alumnoEncontrado = alumnos.find((alumno, index) => {
  return alumno === "Maria";
});
// console.log(alumnoEncontrado);
// Maria

// findIndex (devuelve el indice del elemento)
const indexAlumno = alumnos.findIndex((alumno) => {
  return alumno === "Jose";
});
// console.log(indexAlumno);
// 3

// some (devuelve true o false)
const existeAlumno = alumnos.some((alumno) => {
  return alumno === "Guillermo";
});
// console.log(existeAlumno);
// true

// Ejercicio de tarea resuelto
const focos = ["verde", "rojo", "blanco", "blanco"];

const contarFocos = () => {
  let focosBlancos = 0;
  let focosVerdes = 0;
  let focosRojos = 0;

  for (let index = 0; index < focos.length; index++) {
    if (focos[index] === "blanco") {
      focosBlancos++;
    }
    if (focos[index] === "verde") {
      focosVerdes++;
    }
    if (focos[index] === "rojo") {
      focosRojos++;
    }
  }

  return {
    focosBlancos: focosBlancos,
    focosVerdes: focosVerdes,
    focosRojos: focosRojos,
  };
};
// console.log(contarFocos());
// {focosBlancos: 2, focosVerdes: 1, focosRojos: 1}

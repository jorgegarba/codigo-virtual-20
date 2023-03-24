function CallMenu() {
  let nro_ejercicio = parseInt(
    prompt(
      "ingrese el numero de ejercicio que desea ejcutar: \r\n 1.suma. \r\n 2.Promedio de examanes \r\n 3. Calcular el area de un rectangulo"
    )
  );
  if (isNaN(nro_ejercicio)) {
    alert("oye ingresa valores numericos");
  } else {
    MenuEjercicios(nro_ejercicio);
  }
}

function MenuEjercicios(nro_ejercicio) {
  switch (nro_ejercicio) {
    case 1:
      let valor1 = parseFloat(prompt("ingresa el valor numero 1"));
      let valor2 = parseFloat(prompt("ingresa el valor numero 2"));
      alert(ej1_sumarValores(valor1, valor2));
  }
}

function ej1_sumarValores(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "porfavor ingresa valores ";
  } else {
    return a + b;
  }
}

//que es una API? -- (Aplication progtamming interface)
// data--  json
//api no devuelve iformacion

//en js esiste una funciona la cual se ecmarga de poder hacer la peticion a una url
//FECTH()
//es una funcion  nativa
// existen vario tipos de peticiones
// GET = SIRVE PARA OBTENER INFO
//POST = SIRVE PARA CREAR DATOS
//PUT = SIRVE PARA ACTUALIZAR DATOS
//DELETE= SIRVE PARA ELIMIANR DATOS

//  funciotn async
//las funciones async fueron creadas para poder ejecutar algo-- ye en caso de la ejecucion de esto
//demore .. mas de lo normal se espera para luego respodner la peticion --

//https://api.github.com/users/guillermosifu
//hay un tiempo de espera , no sabemos cuanto dmorara - entonces usamo el async await..

//la estructura de una funciones fecth()

const obtenerDatosGithub = async () => {
  // ene ste ejemplio await esta haciendo lo sgte

  const response = await fetch("https://api.github.com/users/guillermosifu");
  const data = await response.json();

  console.log(data);
};

obtenerDatosGithub();

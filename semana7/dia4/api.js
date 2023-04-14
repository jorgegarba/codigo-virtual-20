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

//priemro atrapamos todos los elemtnos que usaremos con el id 

const imageProfile = document.querySelector("#img-profile")
const githubName = document.querySelector("#github-name")
const githubUsername = document.querySelector("#github-username")
const githubJoined = document.querySelector("#github-joined")
const githubRepos = document.querySelector("#github-repos")
const githubFollowers = document.querySelector("#github-followers")
const githubFollowing = document.querySelector("#github-following")


//action

const githubActionSearch = document.querySelector("#github-action-search")
const githubInputSearch = document.querySelector("#github-search")


githubActionSearch.onclick=()=>{
    const username = githubInputSearch.value;

    githubInputSearch.value="";
    if(username === ""){
        Swal.fire({
            title:"Error",
            text:"Debes llenar el usuario",
            icon:"error"
        });
        return;
    }
    obtenerDatosGithub()
}












const obtenerDatosGithub = async () => {
  // ene ste ejemplio await esta haciendo lo sgte

  const response = await fetch("https://api.github.com/users/guillermosifu");
  const data = await response.json();

  console.log(data);
};

obtenerDatosGithub();

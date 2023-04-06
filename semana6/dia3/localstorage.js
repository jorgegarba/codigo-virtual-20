//capturamor el boton inicio sesion
const btnLogin= document.querySelector("#btn-login")

//recorremos los inputs para capturar el name y el value
btnLogin.onclick = function(event){
    event.preventDefault();

    const inputs = document.querySelectorAll("input")

    inputs.forEach((input)=>{
        //vamos a guaradra el correo y el password en localstorage
        //setItem  guardamos el valor en localstorage
     localStorage.setItem(input.name,input.value)
    })
  
    login()

}

//como capturo los datos del localStorage 
//localSotorage.getItem(key)




//como sinsertamos estos datos capturados desde local storage a mi navegador???


function login(){
    const email= localStorage.getItem("email");
    const password= localStorage.getItem("password");
    form.style.display= "none";
    usuarioSection.style.display="block";
    titleEmail.innerHTML = email;
    titlePassword.innerHTML = password
}


const form = document.querySelector("#section-login");
const usuarioSection = document.querySelector("#usuario-logged");
const titleEmail = document.querySelector("#email");
const titlePassword = document.querySelector("#password");


const btnCerrarSesion = document.querySelector("#cerrar-sesion")

if(email !== null && password !== null){
    login()
}else{
    usuarioSection.style.display="none"
}


btnCerrarSesion.onclick = function(){
    //vamos eleiminar los dato del local 
    localStorage.removeItem("password");
    localStorage.removeItem("email");
    //mostrar el formulaio y ocultar el mensaje del usuario 
    form.style.display="block";
    usuarioSection.style.display="none";
}
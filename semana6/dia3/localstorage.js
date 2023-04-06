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



}
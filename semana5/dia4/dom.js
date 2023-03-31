//Exist dentro de js el document --  est atributo JS me va permitir obtenet elementos desde html ..
//obtner elementos en base a su etieua 

//tag = etiqeta
//id = identifcadr 
//class= clases

//selctores ---   5 selectores...


//como tengo 4 elementos con el tagname input seto sera un array de inputs

const inputs = document.getElementsByTagName("input")
console.log("esto son los inputs ", inputs)

//recordemos que input es un HTMLcollection pero para poder iterarlos debe ser convertido  a un arays normal 
//vamos usar un Array.from va convertir el collection en un array

const newInputs = Array.from(inputs)
console.log("iputs",inputs)
console.log("newInputs",newInputs)

//iteramos la variable inputs 
//map

newInputs.map((newInput)=>{
    console.log("newsinputs",newInput)
})


//capturemos el form


const form = document.getElementsByClassName("formulario")
console.log("formulario", form)


//acceder al boton

const button = document.getElementsByClassName('btn_registro')



const divContent= document.getElementsByTagName("div");
console.log("divcontent" ,divContent)
const newDivContent = Array.from(divContent);
console.log(newDivContent)
newDivContent.forEach((element)=>{
    console.log(element)
})


//------------------------------------------

const inputPassword= document.getElementById("input_password");
console.log(inputPassword)

//de que forma accedemos al value al elemtnto capturado?
inputPassword.style.backgroundColor= "#f01";
console.log(inputPassword.value)

const inputLastname=document.getElementsByClassName("input_lastname")
inputLastname[0].style.color= "red";


const input2= document.querySelectorAll('input')
console.log("query",input2)






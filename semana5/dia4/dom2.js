//querySelecto y querySelectorAll
//hermanos menores ..

//amabas finciones me permiten poder usar elemntos html 

// con clases

const inputName = document.querySelector(".input_name")
console.log(inputName.value)

//esto es con id
const inputPassword = document.querySelector("#input_password")
console.log(inputPassword.value)

// tagname

const form = document.querySelector("form")
console.log(form)

//esto en particular retorna un Nodelist  y est es compatible con foreach

const inputs = document.querySelectorAll("input");
console.log(inputs)
//quiero filtrar e iterar este nodelist
const arrayInputsText = [];

inputs.forEach((input)=>{
    if(input.type === "text"){
        arrayInputsText.push(input);
    }
});
console.log(arrayInputsText)

//------------------------------------
// estte bucle se da por que podemos covertirlo en Array

const arraConvertido = Array.from(inputs);
console.log(arraConvertido)

const arrayfilter =  arraConvertido.filter(
    (input)=> input.type =="text"
);
console.log("arrayfilter",arrayfilter)


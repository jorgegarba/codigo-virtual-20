

function imprimir(){
    console.log("hola desde js")
}

//-----------------crear la fucnio  de la calculadora


function calculadorHTML(operacion){
    //OBTNER LOS VALORES DE LOS INPUTS 
 const numero1 = document.querySelector("#numero1").value;
 const numero2 = document.querySelector("#numero2").value;
 //validar que los datos o esten vacios

 if(numero1 === "" || numero2 === ""){
    alert("oye completa los campos");
    return
 }

 //una vez validado lso campos debo halla la operacion 
 //necesito una variable que se encargue de guardar el resultado

 let resultado = 0
 if(operacion === "+"){
    resultado = sumar(numero1,numero2)
 }
 if(operacion === "-"){
    resultado = restar(numero1,numero2)
 }
 if(operacion === "*"){
    resultado = multiplicar(numero1,numero2)
 }
 if(operacion === "/"){
    resultado = dividir(numero1,numero2)
 }

 //para acabar debo mopstrar el resultado en mi HTML

 const p= document.createElement("p");
 const value = document.createTextNode(resultado);
 p.appendChild(value);

 const contenedor = document.querySelector("#resultado");
contenedor.appendChild(p)

}




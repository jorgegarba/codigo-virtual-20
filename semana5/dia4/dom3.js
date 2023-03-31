//js podemos y tambien escribir desde este docuemnto 

document.write("hola denuevo")

//vamos a crear una lista usado js 
// 1 insertar una lista dentro del div #container-list
//2 insertar elementos dentro de mi lsta li

// paso 1  captura el elemento que usaras
const containerList = document.querySelector("#container-list");
//dentro de js existe una funcion lamamda createElement la ual nos permite crear elemtnos 

// si creas elementos .
const ul = document.createElement("ul");
ul.className = "lista";


//3 iterar debecomnvertirlo en un array-- (html collection o un nodelist)
const inputs =Array.from(document.querySelectorAll("input"));
inputs.map((input)=>{
    const li = document.createElement("li")
    const contenido = document.createTextNode(input.value);
    li.appendChild(contenido);
    ul.appendChild(li)
});

console.log(ul)
containerList.appendChild(ul)



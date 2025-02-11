import { cargarCartas } from "./components/tablero/tablero.js";
import { segHeader } from "./components/header/header.js";

let DOM = document.querySelector("#root");


let contenedor = document.createElement('div');
contenedor.className = "contenedor";

let divHeader = document.createElement('div');
divHeader.className = "div-header";
divHeader.appendChild(segHeader);


let divFooter = document.createElement('div');
divFooter.className = "div-footer";

let divTablero = document.createElement('div');
divTablero.className = "div-tablero";

divTablero.appendChild(cargarCartas());
//En esta le estamos agregando al tablero "Cargar cartas", es decir, todo el div, agregado en el tablero.jd

let divProgreso = document.createElement('div');
divProgreso.className = "div-progreso";


contenedor.appendChild(divHeader);
contenedor.appendChild(divProgreso);
contenedor.appendChild(divTablero);
contenedor.appendChild(divFooter);

DOM.appendChild(contenedor);


//EVENTO PARA TODAS LAS CARTAS
let todasLasCartasDelDOM = document.querySelectorAll('.c-item');
todasLasCartasDelDOM.forEach(cadaCarta => {

    cadaCarta.addEventListener("click", ()=>{
        cadaCarta.classList.add("vuelta-carta");
    })

})

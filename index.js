import { cargarHeader } from "./components/header/header.js";
import { cargarProgreso } from "./components/progreso/progreso.js";
import { cargarFooter } from "./components/footer/footer.js";
import { cargarTablero } from "./components/tablero/tablero.js";


let DOM = document.querySelector("#root");

function cargarDOM(){

    let contenedor = document.createElement('div');
    contenedor.className = "contenedor";
    
    contenedor.appendChild(cargarHeader());
    contenedor.appendChild(cargarProgreso());
    contenedor.appendChild(cargarTablero());
    contenedor.appendChild(cargarFooter());

    return contenedor;

    //EVENTO PARA TODAS LAS CARTAS
    let todasLasCartasDelDOM = document.querySelectorAll('.c-item');
    todasLasCartasDelDOM.forEach(cadaCarta => {

        cadaCarta.addEventListener("click", ()=>{
        cadaCarta.classList.add("vuelta-carta");
        })
    
    })    

}

DOM.appendChild(cargarDOM());

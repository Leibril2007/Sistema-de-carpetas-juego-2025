import { todas_las_cartas } from "./data.js";

function item(Contenido) {
    let div = document.createElement('div');
    div.className = "c-item";
    div.textContent = Contenido;

    return div;
}

function cargarCartas() {
    let div = document.createElement('div');
    div.className = "div-tablero1";

    todas_las_cartas.forEach((letra) => {
        div.appendChild(item(letra));
    });

    return div;
}
function resetearCartas() {
    localStorage.removeItem("cartas"); 
    location.reload(); 
}

let botonReset = document.createElement("button");
botonReset.textContent = "Reiniciar Juego";
botonReset.onclick = resetearCartas;
document.body.appendChild(botonReset);

export { cargarCartas };



let DOM = document.querySelector("#root");

let contenedor = document.createElement('div');
contenedor.className = "contenedor";

let divHeader = document.createElement('div');
divHeader.className = "div-header";

let divFooter = document.createElement('div');
divFooter.className = "div-footer";

let divTablero = document.createElement('div');
divTablero.className = "div-tablero";

let divProgreso = document.createElement('div');
divProgreso.className = "div-progreso";


contenedor.appendChild(divHeader);
contenedor.appendChild(divProgreso);
contenedor.appendChild(divTablero);
contenedor.appendChild(divFooter);

DOM.appendChild(contenedor);
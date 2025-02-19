import { cartas } from "./data.js";
import { cartaTablero} from "./itemCarta.js";
import { mesclarCartas, obtenerCartas } from "./funcionesCartas.js";

function cargarTablero(){

    let divTablero = document.createElement('div');
    divTablero.className = "div-tablero";

    let cartasObtenidas = obtenerCartas(cartas);
    let cartasMezcladas = mesclarCartas(cartasObtenidas); 
    divTablero.appendChild(cartaTablero(cartasMezcladas, cartasMezcladas));

    return divTablero;
}

export { cargarTablero };

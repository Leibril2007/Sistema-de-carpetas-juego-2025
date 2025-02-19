function cartaTablero(Contenido, cartas){
    
    function item(Contenido) {
        let div = document.createElement('div');
        div.className = "c-item";
    
        let carta = document.createElement('div');
        carta.className = "carta volteada"; 
    
        let caraFrente = document.createElement('div');
        caraFrente.className = "cara cara-frente";
        caraFrente.textContent = Contenido;
    
        let caraDetras = document.createElement('div');
        caraDetras.className = "cara cara-detras";
        caraDetras.textContent = "";
    
        carta.appendChild(caraFrente);
        carta.appendChild(caraDetras);
    
        carta.addEventListener('click', () => {
            carta.classList.toggle('volteada');
        });
    
        div.appendChild(carta);
    
        return div;
    }
    
    function cargarCartas(cartas) {
        let div = document.createElement('div');
        div.className = "div-tablero1";
    
        cartas.forEach((letra) => {
            div.appendChild(item(letra));
        });
    
        return div;
    }

    return cargarCartas(cartas);
}


export {cartaTablero}
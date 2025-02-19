
function mesclarCartas(cartas) {

    for (let i = cartas.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cartas[i], cartas[j]] = [cartas[j], cartas[i]]; 
    }

    return cartas;
}
function obtenerCartas(cartasList) {
    let cartasGuardadas = localStorage.getItem("cartas");

    if (cartasGuardadas) {
        return JSON.parse(cartasGuardadas); 
    } else {
        let cartasMezcladas = mesclarCartas(cartasList);
        localStorage.setItem("cartas", JSON.stringify(cartasMezcladas)); 
        return cartasMezcladas;
    }
}


export { mesclarCartas, obtenerCartas };


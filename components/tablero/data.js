function mesclarCartas() {
    let carta_par_1 = ['🍁', '🌵', '🫕', '🪴', '🥐', '🍤', '🍟', '🍔'];
    let carta_par_2 = ['🍁', '🌵', '🫕', '🪴', '🥐', '🍤', '🍟', '🍔'];
    let cartas = carta_par_1.concat(carta_par_2);

    for (let i = cartas.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cartas[i], cartas[j]] = [cartas[j], cartas[i]]; 
    }

    return cartas;
}
function obtenerCartas() {
    let cartasGuardadas = localStorage.getItem("cartas");

    if (cartasGuardadas) {
        return JSON.parse(cartasGuardadas); 
    } else {
        let cartasMezcladas = mesclarCartas();
        localStorage.setItem("cartas", JSON.stringify(cartasMezcladas)); 
        return cartasMezcladas;
    }
}


let todas_las_cartas = mesclarCartas();

export { todas_las_cartas };
let segHeader = document.createElement('div');
segHeader.className = "segundo-header";

//LOGO Y NOMBRE------------------
let pLogoNombre = document.createElement('div');
pLogoNombre.className = "padre-LN";

let logoPag = document.createElement('img');
logoPag.className = "logo-pag";
logoPag.src = "https://cdn-icons-png.flaticon.com/512/2118/2118338.png";
logoPag.alt = "cartas";
pLogoNombre.appendChild(logoPag);

let nombrePag = document.createElement('h1');
nombrePag.className = "nombre-pag";
nombrePag.textContent = "Memory";
pLogoNombre.appendChild(nombrePag);

segHeader.appendChild(pLogoNombre);


//NIVELES----------

let nivelesLista = ["1","2","3","4","5","6"];

function niveles(){
    let circuloNivel = document.createElement('div');
    circuloNivel.className = "circulo-nivel";

    nivelesLista.forEach(element => {
        circuloNivel.appendChild(circulito(element));
    });

    return circuloNivel;
}

function circulito(numNivel){
    let nivel = document.createElement('div');
    nivel.className = "nivel";
    nivel.textContent = numNivel;

    return nivel;
}

segHeader.appendChild(niveles());


export { segHeader };



let estado = 0;
const luces = ["rojo", "amarillo", "verde"];

document.getElementById("btnCambiar").addEventListener("click", cambiarColor);

function cambiarColor() {
    luces.forEach(id => {
        document.getElementById(id).className = "luz";
    });

    const actual = luces[estado];
    document.getElementById(actual).classList.add("luz", "activa", actual);

    estado = (estado + 1) % luces.length;
}

cambiarColor();
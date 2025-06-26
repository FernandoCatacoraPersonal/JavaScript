async function ObtenerDatos() {
    let repuesta = await fetch("http://api.datos.gob.mx/v2/precio.gasolina.publico")
    let datos = await repuesta.json();
    console.log(datos);
}
ObtenerDatos();
console.log("El codigo sigue");
/*Funcion maestra*/
function cargar(){
    //funcion carga cotizacion
    cargarCotizacion(mostrarCotizacion);
    //funcion carga elementos
    cargarElementos();
    //funcion carga textos
    cargarTextos();
    
}
async function cargarCotizacion(callback) {
   // let promesa1 = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    //callback(await promesa1.json());
    await delat(2500);
    
    let promesa2= await fetch('https://open.er-api.com/v6/latest/USD') ;
    let datos2= await promesa2.json();
    document.getElementById("UsdEur").append(datos2.rates.EUR);
    let datos3= await crearPedido('https://open.er-api.com/v6/latest/ARS');
    document.getElementById("UsdArg").append(datos3.rates.USD);

    document.getElementById("espera").style.visibility='hidden';
}
function mostrarCotizacion(datos){
    document.getElementById("Bit").append(datos.bpi.USD.rate);
}
async function crearPedido(url) {
    return new Promise((resolve,reject)=>{
         let xhr= new XMLHttpRequest();
         xhr.open('GET',url);
         xhr.onload=()=>{
            if (xhr.status ===200){
                resolve(JSON.parse(xhr.responseText));
            }
            else{
                reject(xhr.statusText);
            }
         }
         xhr.send();
    });
}
//cargar elementos
function cargarElementos() {
    document.getElementById("logo").setAttribute('src','preloader.gif');
    document.getElementById("titulo").textContent="cotozacion Online";
    document.getElementById("espera").setAttribute('src','preloader.gif');
    document.getElementById("espera").style.visibility='visible';
}
function cargarTextos() {
    document.getElementById("UsdEur").append("Euro a dolar: ");
    document.getElementById("UsdArg").append("Dolar a peso argentino :");
}
function delat(ms) {
    return new Promise((res)=>{
        setTimeout(res,ms);
    });
}
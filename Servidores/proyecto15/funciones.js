/*Relleno de forma gerativa*/
async function cargar() {
    try {
        let tablaG = document.getElementById("contenido");
        let respuesta = await fetch("https://my-json-server.typicode.com/fedegaray/telefonos/db");
        let datos = await respuesta.json();

        for (let vara of datos.dispositivos) {
            let fila = document.createElement("tr");
            for (let vara2 in vara) {
                console.log(`${vara2}: ${vara[vara2]}`);
                let cont = document.createElement("td");
                cont.innerText = vara[vara2];
                fila.appendChild(cont);
            }
            tablaG.appendChild(fila);
        }

    } catch (error) {
        console.error(error);
    }
}

//buscar al item
let boton = document.getElementById("buscarObjeto");
boton.addEventListener("click", () => {
    let objetivoAbuscar = document.getElementById("objConsultar").value;
    buscar(objetivoAbuscar);
});

async function buscar(objetivo) {

    let padre = document.getElementById("resultados");
    let respuesta2 = await fetch("https://my-json-server.typicode.com/fedegaray/telefonos/db");
    let datos = await respuesta2.json();
    let c = 0, c2 = false;
    for (let vara of datos.dispositivos) {
        for (let vara2 in vara) {
            if (vara[vara2] == objetivo) {
                let textos = document.createElement("textarea");
                textos.innerText = vara[vara2];
                textos.setAttribute("id", vara[vara2]);
                c++;
                padre.appendChild(textos);
                c2 = true;

            }
            else if (c <= 5 && c2) {
                let textos = document.createElement("textarea");
                textos.innerText = vara[vara2];
                c++;
                padre.appendChild(textos);
            }

        }
    }
    if (c == 0) {
        let textosFf = document.createElement("textarea");
        textosFf.innerText = "Elemento o id no encontrado";
        padre.appendChild(textosFf);
    }
}
let limpiarTodo = document.getElementById("limpieza");
limpiarTodo.addEventListener("click", () => {
    let padre = document.getElementById("resultados");
    padre.innerHTML = "";
});

//
let eliminar = document.getElementById("eliminar");
eliminar.addEventListener("click", () => {


    fetch("https://my-json-server.typicode.com/fedegaray/telefonos/db", {
        method: "DELETE",

    })
        .then(respuesta => respuesta.json())
        .then(data => alert("elemento eliminado"))
        .catch(error => console.error(error))
});
//añadir algo

let ids = document.getElementById("dire").value;
let marca = document.getElementById("marca").value;
let modelo = document.getElementById("modelo").value;
let color = document.getElementById("color").value;
let alamcenamiento = document.getElementById("almacenamineto").value;
let procesador = document.getElementById("procesador").value;
let botonAgrgar = document.getElementById("agregar");

botonAgrgar.addEventListener("click", (ids,marca,modelo,color,alamcenamiento,procesador) => {
    fetch("https://my-json-server.typicode.com/fedegaray/telefonos/db", {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            id: ids ,
            marca: marca ,
            modelo: modelo,
            color: color,
            almacenamiento: alamcenamiento ,
            procesador: procesador,
        })
    })
    .then( respuesta => respuesta.json() )
    .then(data => alert("cambios hechos:", ids , marca , modelo, color ,alamcenamiento ,procesador  ))
    .catch(error => console.log(error))
});
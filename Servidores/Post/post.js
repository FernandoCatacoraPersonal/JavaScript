/*Publicar nuestra propia info*/

async function crearPost(titulo, contendido) {
    try {
        let respuesta= await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json", //especificar json
            } ,
            body:JSON.stringify({
                title: titulo,
                body: contendido,
                userId: 1,
            }),
        });
        if (!respuesta.ok){
            throw new Error("Error en la solicitud" + respuesta.statusText);
        }
        let data = await respuesta.json();
        console.log("registro creado:" , data);

    } catch (error) {
        console.error("Algo salio mal al crear el registro:", error);
    }
}

crearPost("mi titulo fer", "mis contenidos de mi wazaaaaaa");
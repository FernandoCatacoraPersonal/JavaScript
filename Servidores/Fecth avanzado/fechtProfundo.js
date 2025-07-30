let usuario= 'fede';
let password= "JSvarane" ;
let token ="miToken";

fetch("https://jsonplaceholder.typicode.com/posts" , {
    method:"GET",
    credentials: "include",
    cache: "default",
    redirect: "manual" ,
    headers:{
        "Authorization": "Basic" + btoa(usuario+ ":" + password)  ,
        "Contend-Type": "application/json" ,
    },
   
})
    .then(respuesta => {
        if(respuesta.type === "opaqueredirect"){
            let nuevaUbicaion = respuesta.headers.get("Location");
            console.log("Redirijo a :" + nuevaUbicaion);
        }
        else{
            return respuesta.json();
        }
    } )
    .then(data => console.log(data))
    .catch(error => console.error(error));
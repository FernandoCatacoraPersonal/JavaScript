let  datos={
    title: "Nuevo post",
    body:"Micontenido"
};


axios.get("https://jsonplaceholder.typicode.com/posts")
.then(respuesta => console.log(respuesta.data))
.cath(error => console.log(error))
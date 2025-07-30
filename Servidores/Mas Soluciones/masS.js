//Meotodos añadir
/*fetch('https://jsonplaceholder.typicode.com/posts/5',{
    method: "PUT" ,
    headers: {
        'Content-Type': "application/json"
    },
    body:JSON.stringify( {
        title: 'Nuevo titulo',
        body:'Nueva desp', 
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error(error))*/

//Metodo delete
/*fetch('https://jsonplaceholder.typicode.com/posts/5',{
    method: "DELETE" ,
    
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error(error))*/

//Patch modifica una parte del codigo
fetch('https://jsonplaceholder.typicode.com/posts/5',{
    method: "PATCH" ,
    headers: {
        'Content-Type': "application/json"
    },
    body:JSON.stringify( {
        title: 'Nuevo titulo',
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error(error))
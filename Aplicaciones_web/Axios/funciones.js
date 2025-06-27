function obtenerInfo() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((respuesta)=>{
        let listaInfos=document.getElementById("listaInfo");
        for(let i=0; i<respuesta.data.length;i++){
            let itemLista=document.createElement("li");
            itemLista.innerText=respuesta.data[i].title;
            listaInfos.appendChild(itemLista);
        }
        
    }) .catch((error)=>{console.error(error)})
    
}
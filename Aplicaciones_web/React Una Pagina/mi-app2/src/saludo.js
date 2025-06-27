/*Componente */
import React from "react";
function Saludo(props) { //siempre empiza con mayuscula como las clases
    return(
        <h1>Hola, {props.nombre} </h1>
    )
}
export default Saludo;
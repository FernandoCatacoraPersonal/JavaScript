//import React from "react";
import foto from './foto.jpg';
function Titulo(props) {
    return(
        <div>
            <h1> {props.nombre} </h1>
            <img src={foto} alt='imagen' />
        </div>
        
        
    )
}
export default Titulo;
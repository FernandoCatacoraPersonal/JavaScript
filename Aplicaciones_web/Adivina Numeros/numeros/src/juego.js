import React, { useState } from "react";
function Juego(props) {
    let [valor, ingremento] = useState(0);
    const manejo = (e) => {
        ingremento(Number(e.target.value))
    }
    function verificarnumero(valor) {
        let valorR = Math.floor(Math.random() * 10);
        if (valorR == valor) {
            alert(`Son iguales ${valorR}`);
        }
        else {
            alert(`NO son iguales ya que el valor de aleatorio es : ${valorR} `);
        }
    }
    return (
        <>
            <input type="number" value={valor} onChange={manejo} />
            <p> Valor actual es:  {valor} </p>
            <button onClick={() => verificarnumero(valor)}> {props.nombreBoton}</button>
        </>
    )

}


export default Juego;
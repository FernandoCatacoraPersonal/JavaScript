import React from "react";


function App(props) {
  let [contador,setearContador]=React.useState(0); //manejar e estado de un componente

  function aumentarConteo() {
    setearContador(contador + 1 );
  }

  return (
      <div style={{backgroundColor:props.colorFondo}}>
          <h1 style={{color: props.colorTexto}}>Contador: {contador} </h1>
          <button onClick={aumentarConteo} >Ingrementar</button>
          <input></input>
      </div>
  )
}

export default App;

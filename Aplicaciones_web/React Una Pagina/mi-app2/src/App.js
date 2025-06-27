import React from "react";
import Saludo from "./saludo";
import Mensaje from "./mensaje";
function App() {
  return(
    <div>
      <Saludo nombre="Juan"/>
      <Mensaje mensaje="Bienvenido a mi app react"/>
      <Saludo nombre="Fer..."/>
    </div>

  )
}
export default App;
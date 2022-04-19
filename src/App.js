//Para retornar mas de un elemento HTML debo importar Fragment y contener los elementos a retornar dentro de un elemento <Fragment>.
import React, { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      {/* Se utiliza Skeleton para los estilos. 
      La clase container cumple la misma función que en boostrap */}
      <div className="container">
        <div className="row">
          <div className="one-half column">1</div>
          <div className="one-half column">2</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

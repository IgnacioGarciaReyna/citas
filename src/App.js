import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  //Arreglo de citas
  const [citas, guardarCitas] = useState([]);


  const crearCita = (cita) => {
    //Función que modifica el state
    guardarCitas([
      ...citas, cita
    ])
  };

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            {/* Vamos a utilizar un map para recorrer el array de citas. No se utiliza el forEach. 
            Cada cita del array se la pasamos entre llaves.
            Recordar siempre que se itera de esta forma debemos pasarle un key, en este caso es el cita.id.
            */}
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

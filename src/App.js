//Importamos useState para crear el listado de las citas
import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario";

function App() {
  //Arreglo de citas
  //Citas va a ser un array formado por las diferentes citas 'cita' que pasa Formulario.js, inicia como un arreglo vacio.
  const [citas, guardarCitas] = useState([]);

  //Función que tome las citas actules y tome la nueva
  //Creamos una nueva función para leer la nueva cita y leer las que tenemos
  const crearCita = (cita) => {
    //Utilizamos la función que modifica el state
    //Utilizamos corchetes porque es un arreglo
    //'...citas' es una copia del estate, para no pisar lo que hay dentro con la nueva cita
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
            {/* La forma en la que fluyen los datos del padre a los hijos es por los props, entonces, le pasamos la función de crearCita a Formulario. No hace falta poner parentesis, React ya sabe que es una función.*/}
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">2</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

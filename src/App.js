//Importamos useEffect
import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  //Arreglo de citas
  const [citas, guardarCitas] = useState([]);

  //useEffect siempre es una arrow function
  //useEffect se ejecuta cuando el componente está listo pero también cuando hay cambios en el componente.
  //Le pasamos citas entre corchetes para decirle que cada vez que citas cambie, se ejecute el useEffect.
  //Para decirle que se ejecute una sola vez, hay que pasarle un arreglo vacio. Por ejemplo, si no se lo pasas y haces una consulta a una API se va a hacer un ciclo.
  //Lo vamos a utilizar para colocar las citas en el storage cada vez que se agreguen citas o se eliminen citas, cada vez que el state de citas cambie.
  //Sirve para estar pendiente a ciertos cambios y reaccionar a ellos.
  useEffect( () => {
    console.log('Documento listo o algo pasó con las citas.')
  }, [citas])

  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  //Función que elimina una cita por su id
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  //Mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

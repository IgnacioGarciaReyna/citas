import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  //Arreglo de citas
  const [citas, guardarCitas] = useState([]);

  const crearCita = (cita) => {
    //Función que modifica el state
    guardarCitas([...citas, cita]);
  };

  //Función que elimina una cita por su id
  const eliminarCita = (id) => {
    //Creamos un nuevo arreglo
    //Cuando usamos filter pasan los elementos que cumplan la condición, en este caso queremos mantener a todos los que tengan un id distinto al que queremos eliminar.
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    //Como nuevasCitas ya es un arreglo, no necesitas los corchetes como antes cuando guardabas una cita sola.
    guardarCitas(nuevasCitas);
  };

  //Mensaje condicional
  //Se podría hacer con un if pero es mas facil con un ternario.
  //Esta condición también se usa cuando tenes que hacer que se muestre un menú u otro dependiendo si el usuario inició sesión o no.
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
            {/* Agregarmos la variable de js para el titulo condicional */}
            <h2>{titulo}</h2>
            {/* Le pasamos la función eliminarCita
             */}
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

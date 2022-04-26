//Importamos useEffect
import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  //Citas en local storage
  //Primero vemos si hay citas en localStorage.
  //Como localStorage solo almacena strings, vamos a agregar JSON.parse que convierte ese arreglo que está almacenado como string.
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  //Si no hay citas iniciales (null) citas iniciales va a ser un arreglo vacio.
  if (!citasIniciales) {
    citasIniciales = [];
  }

  //Arreglo de citas
  //Una vez que obtuvimos el array de objetos de citasIniciales del localStorage o en su defecto el array vacio, este pasa a ser el valor inicial de el array 'citas' del useState.
  const [citas, guardarCitas] = useState(citasIniciales);

  //useEffect siempre es una arrow function
  //useEffect se ejecuta cuando el componente está listo pero también cuando hay cambios en el componente.
  //Le pasamos citas entre corchetes para decirle que cada vez que citas cambie, se ejecute el useEffect.
  //Para decirle que se ejecute una sola vez, hay que pasarle un arreglo vacio. Por ejemplo, si no se lo pasas y haces una consulta a una API se va a hacer un ciclo.
  //Lo vamos a utilizar para colocar las citas en el storage cada vez que se agreguen citas o se eliminen citas, cada vez que el state de citas cambie.
  //Sirve para estar pendiente a ciertos cambios y reaccionar a ellos.
  useEffect(() => {
    //Acá también tenemos disponible a citasIniciales.
    //Como tenemos 'citas' como dependecia, cuando se produzca un cambio en el arreglo 'citas' de el state, se las mandamos a citasIniciales del localStorage. Si no, le pasamos un arreglo vacio.
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);

  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  //Función que elimina una cita por su id
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  //Mensaje condicional
  const titulo = citas.length === 0 ? "No hay citas" : "Administra tus citas";

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

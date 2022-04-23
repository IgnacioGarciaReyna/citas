import React, { Fragment, useState } from "react";

const Formulario = () => {
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  //Segundo state
  //Inicia como false porque cuando inicia no hay error
  const [error, actualizarError] = useState(false);

  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const submitCita = (e) => {
    e.preventDefault();

    //Como usamos destructuring podemos usar el name directamente, y no cita.mascota o cita.propietario
    console.log(mascota);

    //Validación
    //el .trim() elimina espacios en blanco en el string que ingresa el usuario.
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      //Podriamos consolearlo, pero ningún usuario utiliza la consola, debemos utilizar un segundo state.
      // console.log("Hay un error");

      //En caso de que pase la validación le damos true. En este caso no utilizamos llaves como en actualizarCita porque en este caso el valor es un booleano, no un objeto.
      actualizarError(true)
      //Agregamos un return para que el código no se siga ejecutando.
      return;
    }

    //Asignar un ID

    //Crear la cita

    //Reiniciar el form
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>

      {/* Recordemos que acá no se puede escribir un if, por lo tanto se escribe un ternario.
      alerta-error es una clase que viene en la hoja de estilos
      En caso de que sea false queremos que sea null para que no imprima nada. */}

    {error? <p className="alerta-error">Todos los campos son obligatorios</p> :null}

      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre de la mascota"
          onChange={actualizarState}
          value={mascota}
        />
        <label>Nombre Propietario</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del dueño"
          onChange={actualizarState}
          value={propietario}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label>Síntomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;

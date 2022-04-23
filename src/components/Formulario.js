import React, { Fragment, useState } from "react";
//Importamos uuid
//Utilicé una importación diferente a la del video, porque esa no funcionaba.
import { v4 as uuid } from 'uuid';
const Formulario = () => {
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, actualizarError] = useState(false);

  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const submitCita = (e) => {
    //Previene la acción default del onSubmit
    e.preventDefault();

    //Validación
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      //Agregamos un return para que el código no se siga ejecutando.
      return;
    }

    //Eliminar el mensaje de error
    actualizarError(false);

    //Asignar un ID
    //Vamos a utilizar uuid para generar ids automáticos, la instalamos con "npm i uuid"
    cita.id = uuid();
    console.log(cita);

    //Crear la cita

    //Reiniciar el form
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>

      {/* Recordemos que acá no se puede escribir un if, por lo tanto se escribe un ternario.
      alerta-error es una clase que viene en la hoja de estilos
      En caso de que sea false queremos que sea null para que no imprima nada. */}

      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}

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

import React, { Fragment, useState } from "react";
import { v4 as uuid } from "uuid";
//Importamos propTypes que viene en React
import PropTypes from "prop-types";

const Formulario = ({ crearCita }) => {
  //State de cita
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, actualizarError] = useState(false);

  //Función para cada vez que el usuario escribe en un input
  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //Extraer los valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  //Agregar cita
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
    cita.id = uuid();
    console.log(cita);

    //Crear la cita
    crearCita(cita);

    //Reiniciar el form
    actualizarCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: ""
    });
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>

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

//Normalmente los componentes se documentan abajo de todo, antes del export default.
//Se inicia con el nombre del componente.
//Si hay algún problema con los tipos, sale un error en consola.
Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}

export default Formulario;

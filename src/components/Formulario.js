//Importamos useState que nos permite tener un state en react
import React, { Fragment, useState } from "react";

const Formulario = () => {
  //Crear State de Citas
  //"cita" tiene toda la información del state y "actualizarCita" es la función que reescribe en el objeto, en js lo hariamos con un eventlistener, pero en React tenemos eventos, en este caso onChange.
  //Creamos un objeto para poder agregar todos los campos que tenemos en el formulario. Vamos a leer cada input por su name.
  //El objeto inicia con ciertas propiedades. Esas propiedades son strings vacios porque los campos del formulario inician vacios.
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  //Función que se ejecuta cuando el usuario escribe un input
  const actualizarState = () => {
    console.log("Escribiendo");
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      <form>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre de la mascota"
          onChange={actualizarState}
        />
        <label>Nombre Propietario</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del dueño"
          onChange={actualizarState}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
        />
        <label>Síntomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={actualizarState}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;

import React, { Fragment, useState } from "react";

const Formulario = () => {
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  //Cuando el usuario presiona el agregar cita
  //onSubmit tiene como default enviar los datos del formulario con el método get y se coloca un query string en la barra de busqueda:"http://localhost:3000/?mascota=&propietario=&fecha=&hora=&sintomas=". Por eso, se escribe un preventDefault al evento, para que no realice esta acción.
  const submitCita = e => {
    e.preventDefault();
    // console.log(e);

    //Validar: Si tuvieramos una base de datos, no insertas primero en la base de datos y despues validas.

    //Asignar un ID: Necesitas un key cuando mostrás registros repetidos en React.

    //Crear la cita

    //Reiniciar el form
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>

      {/* Vamos a agregar las acciones que realiza el button cuando lo presionamos.
      En js, cuando tenés un form, usas un addEventListener y luego un submit, lo mismo pasa en React... Debemos agregar un onSubmit en el form y dentro le pasamos una función. */}
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

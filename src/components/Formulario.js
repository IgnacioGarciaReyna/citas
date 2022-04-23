import React, { Fragment, useState } from "react";

const Formulario = () => {
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  //Le pasamos el evento a la arrow function, es decir, cada vez que se produce el onChange (cada vez que cambia un campo), se pasa un evento.
  //Este evento tiene mucha información, por ejemplo, si queres saber en que campo estás escribiendo usas e.target.name, para saber lo que contiene el campo e.target.value.
  //Usamos actualizarCita que es la función que actualiza el state, no podemos poner cita.mascota = e.target.value por que no sigue las reglas de React.
  const actualizarState = e => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    
    //Como es un objeto usamos llaves
    //Dentro usamos array destructuring y le decimos que la propiedad que sea igual al name va a tener un valor value. 
    //Utilizamos el spread operator para crear una copia del objeto cita que se creó con el evento anterior.
    actualizarCita({
      ...cita,
      [e.target.name] : e.target.value
    })
  };

  //Extraemos los valores
  //Utilizamos structuring porque la otra forma sería: const mascota = cita.mascota; const propietario = cita.propietario; etc.
  //Se recomienda agregar los nombres de las const como value = {'nombreDeLaConst'} en los inputs. Esto nos va a permitir mas adelante resetear el formulario.
  const {mascota, propietario, fecha, hora, sintomas} = cita

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

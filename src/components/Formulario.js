//Extraemos Fragment porque vamos a ponerle mas de un elemento al return
import React, { Fragment } from "react";

const Formulario = () => {
  return (
    <Fragment>
      <h2>Crear Cita</h2>
      <form>
        <label>Nombre Mascota</label>
        {/* En HTML hay etiquetas que no tienen cierre. En React tampoco tienen cierre, pero se debe agregar la barra antes de cerrar la etiqueta como pasa con este input. 
        "u-full-width" es una clase de Eskeleton.
        */}
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre de la mascota"
        />
        <label>Nombre Propietario</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del dueño"
        />
        <label>Fecha</label>
        <input type="date" name="fecha" className="u-full-width" />
        <label>Hora</label>
        <input type="time" name="hora" className="u-full-width" />
        <label>Síntomas</label>
        <textarea name="hora" className="u-full-width"></textarea>
        <button type="submit" className="u-full-width button-primary">Agregar cita</button>
      </form>
    </Fragment>
  );
};

export default Formulario;

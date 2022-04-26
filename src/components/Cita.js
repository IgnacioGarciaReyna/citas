import React from 'react';
import PropTypes from "prop-types";

//Extraemos eliminarCita con destructuring
const Cita = ({cita, eliminarCita}) => (
    <div className='cita'>
        <p>Mascota: <span>{cita.mascota}</span> </p>
        <p>Propietario: <span>{cita.propietario}</span> </p>
        <p>Fecha: <span>{cita.fecha}</span> </p>
        <p>Hora: <span>{cita.hora}</span> </p>
        <p>Síntomas: <span>{cita.sintomas}</span> </p>

        {/* Button para eliminar cita.
            El onClick lo debemos crear desde App.js porque es donde tenemos todas las citas. En este componente cada cita no tiene referencia de las otras citas, es mas complicado.
            
            Es muy importante que eliminar cita no se llame como 'eliminarCita()' solamente porque estás mandando a llamar a la función, si no, como una arrow function para que espere a que suceda ese onClick.*/}
        <button
            className='button eliminar u-full-width'
            onClick={ () => eliminarCita(cita.id)}
        >Eliminar &times;</button>
    </div>
);

//El key no se documenta
//Se documentan los otros props
//Se agrega isRequired si es obligatorio
Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
 
export default Cita;
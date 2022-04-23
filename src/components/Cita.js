import React from 'react';

//Extraemos la cita completa con destructuring
const Cita = ({cita}) => (
    <div className='cita'>
        <p>Mascota: <span>{cita.mascota}</span> </p>
        <p>Propietario: <span>{cita.propietario}</span> </p>
        <p>Fecha: <span>{cita.fecha}</span> </p>
        <p>Hora: <span>{cita.hora}</span> </p>
        <p>Síntomas: <span>{cita.sintomas}</span> </p>
    </div>
);
 
export default Cita;
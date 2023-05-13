import React, {Fragment, useState, useEffect} from 'react'
import "../Style/Styles1.css";

const Listadoalumnos = ({alumno, setAlumno, alumnos, setListUpdated}) => {

     
    const handleUpdate = id => {
      const requestInit = {
        method: "PUT",
        headers: {'Content-Type': 'application/json; charset=utf-8'},
        body: JSON.stringify(alumno)
      }
      fetch('HTTP://localhost:9000/modificaralumno/' + id, requestInit)
      .then(res => res.text())
      .then(res => console.log(res))
      
      // establecer estado de alumno con valores vacíos
      setAlumno({
        id: 0,
        nombre: '',
        apellido: '',
        fecha_nacimiento: '',
        carrera: '',
        promedio: 0
      })

      setListUpdated(true)
    }

    return (
        <table >
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>APELLIDO</th>
                    <th>FECHA DE NACIMIENTO</th>
                    <th>CARRERA</th>
                    <th>PROMEDIO</th>
                </tr>
            
            
                {alumnos.map(alumno => (
                    <tr key={(alumno.id)}>
                    <td>{alumno.id}</td>
                    <td>{alumno.nombre}</td>
                    <td>{alumno.apellido}</td>
                    <td>{alumno.fecha_nacimiento}</td>
                    <td>{alumno.carrera}</td>
                    <td>{alumno.promedio}</td>
                    <td>
                        <div>
                            <button onClick={() => handleUpdate(alumno.id)}>Actualizar </button>
                        </div>
                    </td>
                    </tr>
                
                ))}
                    

            </tbody>
        </table>
     );
}
 
export default Listadoalumnos;

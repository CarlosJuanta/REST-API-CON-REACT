import React, { useState } from 'react';
import "../Style/Styles1.css";

const Buscar= ({alumnos, setListUpdated}) => {
    const [alumno, setAlumno] = useState({
        id: 0,
        nombre: '',
        apellido: '',
        fecha_nacimiento: '',
        carrera: '',
        promedio: 0
    });

    const handleUpdate = id => {
        const requestInit = {
            method: "PUT",
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: JSON.stringify(alumno)
        }
        fetch('HTTP://localhost:9000/modificaralumno/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))
        //reiniciar state del libro
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

    const handleSearch = id => {
        const foundAlumno = alumnos.find(alumno => alumno.id === id);
        if (foundAlumno) {
            setAlumno(foundAlumno);
        } else {
            setAlumno({
                id: 0,
                nombre: '',
                apellido: '',
                fecha_nacimiento: '',
                carrera: '',
                promedio: 0
            });
            alert(`No se encontró un alumno con ID ${id}`);
        }
    }

    return (
        <div>
            <div>
                <label htmlFor="id">Buscar por ID:</label>
                <input
                    type="number"
                    id="id"
                    name="id"
                    value={alumno.id}
                    onChange={e => setAlumno({...alumno, id: parseInt(e.target.value)})}
                />
                <button onClick={() => handleSearch(alumno.id)}>Buscar</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOMBRE</th>
                        <th>APELLIDO</th>
                        <th>FECHA DE NACIMIENTO</th>
                        <th>CARRERA</th>
                        <th>PROMEDIO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{alumno.id}</td>
                        <td>{alumno.nombre}</td>
                        <td>{alumno.apellido}</td>
                        <td>{alumno.fecha_nacimiento}</td>
                        <td>{alumno.carrera}</td>
                        <td>{alumno.promedio}</td>
                        <td>
                            <button onClick={() => handleUpdate(alumno.id)}>Actualizar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Buscar;
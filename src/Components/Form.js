import React from 'react';
import "../Style/Styles1.css";

const Form = ({alumno, setAlumno}) => {


    const handleChange = e => {
   
    setAlumno({
        ...alumno,
        [e.target.name]: e.target.value
    })
    
    }

 
    const handleSubmit = () => {
    

        const requestInit ={
            method:'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: JSON.stringify(alumno)

        }
        fetch('HTTP://localhost:9000/agregaralumno', requestInit)
        .then(res => res.json())
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
    }
    

    return ( 
        
        <form onSubmit={handleSubmit} className='form-body'>
         <h1 align="center">Registro</h1>   
		<input name="id" onChange={handleChange} type="text" id="ID alumno" required placeholder="Id"/>
		<input name="nombre" onChange={handleChange} type="text" id="nombre" required placeholder="Nombre"/>
		<input name="apellido" onChange={handleChange} type="text" id="apellido" required placeholder="Apellido"/>
		<input name="fecha_nacimiento" onChange={handleChange} type="date" id="fechaNacimiento" required placeholder="Fecha de Nacimiento"/>
		<input name="carrera" onChange={handleChange} type="text" id="carrera" required placeholder="Carrera"/>
		<input  name ="promedio" onChange={handleChange} type="text" id="promedio"  required placeholder="Promedio"/>
		 <br/>
         <button classname= "boton" type="submit">Registrar</button>


        </form>
     );
}
 
export default Form; 
import React, {Fragment, useState, useEffect} from 'react'
import Navbar from './Components/Navbar';
import Listadoalumnos  from './Components/Listadoalumnos';
import Form from './Components/Form';



function App() {

   const [alumno, setAlumno] = useState({
    id: 0,
    nombre: '',
    apellido: '',
    fecha_nacimiento: '',
    carrera: '',
    promedio: 0
})

  const [alumnos, setAlumnos] = useState([])

  const [listUpdated, setListUpdated] = useState(false)
  
  useEffect(() => {
   const getalumnos = () => {
    fetch('HTTP://localhost:9000/buscaralumno')
    .then(res => res.json())
    .then(res => setAlumnos(res))
   }
    getalumnos()
    setListUpdated(false)
  }, [listUpdated])
  

  return (
    <Fragment>
      <Navbar/>
      <div className='principal'>
          <div className='form'>
          <Form alumno={alumno} setAlumno={setAlumno}/>
           </div>
          
           <div className='lista'>
            <Listadoalumnos alumno={alumno} setAlumno={setAlumno} alumnos={alumnos}  setListUpdated={setListUpdated}/>
          </div>
        </div>
      
    </Fragment>
  );
}

export default App;

import { useState } from 'react';
import {v4 as uuid} from 'uuid'
import './App.css';
import Header from './componentes/header/header';
import Formulario from './componentes/formulario/Formulario';
import { MiOrg } from './componentes/MiOrg/MiOrg';
import { Footer } from './componentes/footer/Footer';
import { Equipos } from './componentes/Equipos/Equipos';


function App() {

  // hooks useState

  // hook para mostrar y ocultar el formulario de  colaboradores
  const [mostrarForm, actuarilzarMostar] = useState(true);

  // hook para almacenar los colaboradores, se inicia como un objeto con = []
  const[colaboradores, setColaboradores] = useState([
    {
    id: uuid(),
    Nombre : "Adolfo Juarez",
    Puesto : "Desarrollador Web",
    Foto : "https://avatars.githubusercontent.com/u/122308742?s=96&v=4",
    Equipo : "Front End", 
  },
  {
    id: uuid(),
    Nombre : "Adolfo Juarez",
    Puesto : "Desarrollador Web",
    Foto : "https://avatars.githubusercontent.com/u/122308742?s=96&v=4",
    Equipo : "Programación", 
  },
])
  
  // lista de equipos
  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278 ",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    
    },
    {
      id: uuid(),
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    
    },
    {
      id: uuid(),
      titulo: "Ux/Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    
    },
    {
      id: uuid(),
      titulo:  "UX/UI",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    
    },
  ])


  // funcion para mostar y ocultar el formulario de colaboradores
  const mostrarOcultar = () =>{
    actuarilzarMostar(!mostrarForm)
  }


const nuevoColaborador = (colaborador) =>{

// metodo spread operator, para almacenar datos tipo objetos
  setColaboradores([...colaboradores, colaborador])
}

// eliminar colaborador 
const eliminarColaborador = (id) =>{
  console.log("eliminar colaborador", id)
   const colabeliminado = colaboradores.filter((colaborador) => colaborador.id !== id)
  setColaboradores(colabeliminado)
}
  
const actualizarColor = (color, id) =>{
  // console.log("actualizar color", color, id)
  const nuevoColor = equipos.map ((equipos) => {
    if(equipos.id === id){
      equipos.colorPrimario = color
    }
    return equipos
  })

  setEquipos(nuevoColor)
}


  return (
    <div className="App">

      <Header></Header>

      {/* uso de ternario, = condicion ? seMuestra : nos se muestra 
        condicion && semuestra
      */}
      { mostrarForm === true ? <Formulario  
      
      equipos={equipos.map((equipo) =>  equipo.titulo ) }    
      
      nuevoColaborador = {nuevoColaborador}
      /> : <> </>
      
      }
      
      <MiOrg  cambioEstado={mostrarOcultar}   />

      {
        equipos.map((equipo) =>{
          // console.log(equipo)
          return   <Equipos   
          key={equipo.titulo}   
          datos={equipo} 
          
          // metodo para filtrar a los colaboradores por equipos, equivalentes a los titulos de los equipos
          colaboradores={colaboradores.filter(colaborador => colaborador.Equipo === equipo.titulo) }
          eliminarColaborador={eliminarColaborador}
          actualizarColor = {actualizarColor}

          /> 
        })
      }

     
      
      <Footer />
      
    </div>
  );
}

export default App;

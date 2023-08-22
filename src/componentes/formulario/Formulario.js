
import { useState } from "react"
import "./Formulario.css"
import { CampoTexto } from "../CampoTexto/CampoTexto"
import { ListaOpciones } from "../ListaOpciones/ListaOpciones"
import { Boton } from "../Boton/Boton"

const Formulario = (props) =>{

    // hooks useState / usar estado
    const [Nombre, setNombre] = useState("")
    const [Puesto, setPuesto] = useState("")
    const [Foto, setFoto] = useState("")
    const [Equipo, setEquipo] = useState("")



    const manejarEnvio = (event)=>{
        // funcion para el el boton del formulario, y desactivad funcion por defecto
        event.preventDefault();

        let enviarDatos = {
            Nombre,
            Puesto,
            Foto,
            Equipo
        }

        props.nuevoColaborador(enviarDatos)
        // console.log(enviarDatos)

    }

    return <section className="formulario" >

        
{/* eventos propios de react, diferenciar de html */}
        <form  onSubmit={manejarEnvio} >  
            <h2>    Rellena el formulario para crear el colaborador. </h2>

            <CampoTexto 
            // enviamos props, propiedades a utilizar en dicho componente 
            titulo="Nombre" 
            placeholder="Ingresar Nombre" 
            valor= {Nombre}
            actualizarValor = {setNombre}
            required />

            <CampoTexto 
            titulo="Puesto" 
            placeholder="Ingresar Puesto"
            valor= {Puesto}
            actualizarValor = {setPuesto}
            required />

            <CampoTexto 
            titulo="Foto"   
            placeholder="Ingresar enlace de Foto"
            valor= {Foto}
            actualizarValor = {setFoto}
            required />

            <ListaOpciones 
            titulo="Equipo" 
            equipo = {props.equipos}
            placeholder="Ingresar Equipo"  
            valor = {Equipo}
            actualizarValor = {setEquipo}
            />

            <Boton texto="Crear" />
        </form>

        <form>
                
            <h2>    Rellena el formulario para crear el Equipo. </h2>

            <CampoTexto 
            // enviamos props, propiedades a utilizar en dicho componente 
            titulo="Nombre" 
            placeholder="Ingresar Nombre" 
            valor= {Nombre}
            actualizarValor = {setNombre}
            required />

            <CampoTexto 
            titulo="Puesto" 
            placeholder="Ingresar Puesto"
            valor= {Puesto}
            actualizarValor = {setPuesto}
            required />

            <Boton texto="Registrar equipo" /> 
        </form>

    </section>

}

export default Formulario
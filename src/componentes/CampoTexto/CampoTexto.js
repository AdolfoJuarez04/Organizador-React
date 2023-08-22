
// import { useState } from "react"
import "./CampoTexto.css"

export const CampoTexto = (props) =>{


    const manejarValor = (evento) =>{
        // capturamos el valor de la entrada de los imput y los actualizamos 
        props.actualizarValor(evento.target.value)

    }

    return <div className="campo-texto" >
        <label>{props.titulo}</label>

        <input 
        // propiedades extraidas del formulario a utilizar
        placeholder={props.placeholder}  
        equired={props.required} 
        value={ props.valor } 
        onChange={manejarValor}

        />
    </div>
} 
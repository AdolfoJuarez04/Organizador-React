import "./Equipos.css"
import {Colaborador} from "../Colaborador/Colaborador"
import hexToRgba from 'hex-to-rgba';

export const Equipos = (props) => {


    const {titulo, colorPrimario, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor } = props

    const color = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    } 
    
// envolver lo que se quiere retormar en un fracment <></>
    return <>
    {  
        colaboradores.length > 0 &&
        <section className="crear__equipos"   style={ color }  >
            <input 
             type="color"
             className="color"
             valor = {hexToRgba(colorPrimario, 0.6)}
             onChange={(evento) => {
                actualizarColor(evento.target.value, id)
            }}

             />

            <h3  style={{borderColor: colorPrimario }} > {titulo} </h3>
            <div  className="crear__equipos--colaborador" >
                {
                    colaboradores.map((colaborador, index) =>  <Colaborador  
                     datos={colaborador}  
                     key={index} 
                     colorPrimario = {colorPrimario}
                     eliminarColaborador = {eliminarColaborador}
                     />     )
                }
            
            </div>

        </section>
        }
    </>
}
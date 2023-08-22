import "./Colaborador.css";
import {AiFillCloseCircle} from "react-icons/ai";


 export const Colaborador = (props) =>{

    const {Nombre, Puesto, Foto, id } = props.datos
    const{colorPrimario, eliminarColaborador} = props
 
    return <section> 
        <div className="colaborador"> 
            <AiFillCloseCircle  className="eliminar"  onClick={() => eliminarColaborador(id)} />
            <div className="encabezado"    style={ {backgroundColor: colorPrimario}  }   >

                <img  src={Foto} alt={Nombre}  />
            </div>
            <div className="info">
            
                <h4 className="card__titulo" > {Nombre} </h4>
                <h5 className="card__info" > {Puesto} </h5>

            </div>
        </div>
    </section>
}


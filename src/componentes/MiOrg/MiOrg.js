// import {useState} from "react"
import "./MiOrg.css"


export const MiOrg =(props) => {

    // estados = hooks, exixten varios, se importa de react, 
    // hooks a utilizar es useStat()
    // estructura const [variable, funcion para la variable para actualizar] =useState(valor inicial)

/*     const [mostrar, actualizarMostrar] = useState(true)
    
    const mostrarOcultar = () => {
        
        // se llama a la funcion del hook

        actualizarMostrar(!mostrar)
    }
 */

    return <section className="miorg-contenido" >
        <h3 className = "miorg-titulo"> Mi Organizacion </h3>
        {/* relacionamos eventos de react en nuestro contenido, inicial mayuscula en el nombre del evento */}
        <img  src = "./img/add.png" alt = "add"   onClick={props.cambioEstado}  />
    </section>
}
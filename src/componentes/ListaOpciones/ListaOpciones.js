import "./ListaOpciones.css"

export  const ListaOpciones = (props) =>{


  


// estructura para la funcio Map, solo funciona para "arreglos"
//  funcion map -> arreglo.map('arroy fuction'(variable, index 'x defecto') = { return <option> 'codigo deciado'})
// la informacion para retornar puede ser en una sola linea 
    const manejarValor = (evento) =>{
        props.actualizarValor(evento.target.value)

    }

    return <div className="Lista-opciones">
            <label>{props.titulo}</label>

            <select  value={props.valor}  onChange={manejarValor}>
                <option value="" disabled defaultValue="" hidden > {props.placeholder}</option>
                {
                    props.equipo.map((equipo,index) =>{
                        return <option key={index} > {equipo} </option>
                    })
                }
            </select>
    </div>
}
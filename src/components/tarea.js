import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import '../styles/tarea.css'

const Tarea = ({ id, texto, completada, completarTarea, eliminarTarea }) => {
    return (
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div className='tarea-texto'
                onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div className='tarea-contenedor-iconos'
                onClick={() => eliminarTarea(id)}>
                <AiOutlineCloseCircle className='tarea-icono' />
            </div>
        </div>
    );
}

/* El prop compleatada, será verdadero o falso, dependiendo del valor que tenga. si es verdadero agrega las primeras 2 clases, y si es falso
agrega la última que es la de tarea-contenedor  */

export default Tarea;
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import '../styles/tareaFormulario.css'

const TareaFormulario = (props) => {

    const [input, setInput] = useState('');

    const manejarCambio = (e) => {
        setInput(e.target.value);
    }

    const manejarEnvio = (e) => {
        e.preventDefault(); // Evita que el aplicacion recarge la web
        console.log('Enviando Formulario...');

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }

        /* console.log(tareaNueva); */
        props.onSubmit(tareaNueva);
    }

    return (
        <form className="tarea-formulario"
            onSubmit={manejarEnvio}>
            <input
                className='tarea-input'
                type='text'
                placeholder='Escribe una Tarea'
                name='texto'
                onChange={manejarCambio}
            />
            <button className='tarea-boton'>Agregar Tarea</button>
        </form>
    );
}


/* El error al hacer la prueba cuando se presiona el boton de Agregar Tarea y deberia de salir el mensaje de 'Enviado Formulario...' se 
debe a que en el return teniamos un div y se necesitaba un form */

export default TareaFormulario;
import React, { useState } from "react";
import TareaFormulario from "./tareaFormulario";
import Tarea from "./tarea";
import '../styles/listaDeTareas.css'

const ListaDeTareas = () => {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = (tarea) => {

        console.log(tarea);

        if (tarea.texto.trim()) { //Verifica que el texto no esté vacio
            tarea.texto = tarea.texto.trim(); // trim() quita los espacios del principio o del final de una cadena de caracteres
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
        /* console.log('Tarea Agregada');
        console.log(tarea); */
    }

    const eliminarTarea = (id) => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }

    const completarTarea = (id) => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        })
        setTareas(tareasActualizadas);
    }

    return (
        /* Etiquetas vacias tambien llamdas fragmentos en React, sirven para poder crear la estructura HTML en vez del div*/
        <>
            <TareaFormulario onSubmit={agregarTarea} />
            <div className='tareas-lista-contenedor'>
                {/* Renderizar lista de componentes */}
                {
                    tareas.map((tarea) =>
                        <Tarea
                            key={tarea.id} // para que react sepa el nombre y no cambie el orden de las tareas al actualizarlos es necesario pasarle la propiedad key y id. key sirve para iderntificar un elemento unico dentro de la lista
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            eliminarTarea={eliminarTarea}
                            completarTarea={completarTarea}
                        />
                    )
                }
            </div>
        </>
    );
}

/* Cada tarea se va reprensetar como un objeto en el array */
/* Map es un método que va tomar cada uno de esas tareas, las va pasar una por una como el argumento para otra funcion y va realizar lo que nosotros especifiquemos  */

export default ListaDeTareas;
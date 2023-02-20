import './App.css'
import Logo from './components/logo';
import Tarea from './components/tarea';
import TareaFormulario from './components/tareaFormulario';
import ListaDeTareas from './components/listaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      {/* Componentes del Logo */}
      <Logo />
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
        {/*  <Tarea texto={'Programar'}></Tarea> */}
        {/* <TareaFormulario /> */}
      </div>
    </div>
  );
}

export default App;

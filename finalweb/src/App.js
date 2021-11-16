import logo from './logo.svg';
import './App.css';
import Tabla from './componentes/Tabla/Tabla';
import Boton from './componentes/Boton/Boton';

function App() {
  return (
    <div className="App">
        <Boton titulo=" Más Información " tamaño="boton"> </Boton>
        <Boton titulo=" Ir a la Reunión " tamaño="boton1"> </Boton>
        <Boton titulo=" Cancelar Cita " tamaño="boton2"> </Boton>
        
        <p>
          Citas pendientes
        </p>
        <Tabla fecha="18/06/21 08:30" mensaje="Su cita fue pre-aprobada.
Se ha verificado su formato y cumple con las condiciones"></Tabla>
    </div>
  );
}

export default App;

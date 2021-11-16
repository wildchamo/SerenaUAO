import logo from './logo.svg';
import './App.css';
import Tabla from './componentes/Tabla/Tabla';

function App() {
  return (
    <div className="App">
        <p>
          Citas pendientes
        </p>
        <Tabla fecha="18/06/21 08:30" mensaje="Su cita fue pre-aprobada.
Se ha verificado su formato y cumple con las condiciones"></Tabla>
    </div>
  );
}

export default App;

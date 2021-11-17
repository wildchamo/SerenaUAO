import React, {useState} from 'react';
import moment from "moment";
import './App.css';
import Tabla from './componentes/Tabla/Tabla';
import Boton from './componentes/Boton/Boton';
import Calendario from './componentes/Calendario/Calendario';
import Campo from './componentes/Campo/Campo';

function App() {
  const [value, setValue] = useState(moment().locale('es',null));
  return (
    <div className="App">
        <Boton titulo=" Más Información " tamaño="boton"> </Boton>
        <Boton titulo=" Ir a la Reunión " tamaño="boton1"> </Boton>
        <Boton titulo=" Cancelar Cita " tamaño="boton2"> </Boton>
        <Calendario value={value} onChange={setValue}/>
        <Campo tamaño="campo-s" texto="Usuario"/>
        <Campo tamaño="campo-l" texto="Escriba aqui el motivo..."/>
    </div>
  );
}

export default App;

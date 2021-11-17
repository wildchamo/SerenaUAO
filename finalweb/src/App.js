import React, { useState } from 'react';
import moment from "moment";
import './App.css';
import Tabla from './componentes/Tabla/Tabla';
import Boton from './componentes/Boton/Boton';
import Calendario from './componentes/Calendario/Calendario';
import Campo from './componentes/Campo/Campo';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './paginas/Login/Login';
import Home from './paginas/Home/Home';
import { render } from "react-dom";
import ModalLogin from './componentes/modalLogin/modalLogin';

function App() {
  const [value, setValue] = useState(moment().locale('es', null));
  return (
    <Router>
      <div className="App">
        {/* <Boton titulo=" Más Información " tamaño="boton"> </Boton>
        <Boton titulo=" Ir a la Reunión " tamaño="boton1"> </Boton>
        <Boton titulo=" Cancelar Cita " tamaño="boton2"> </Boton>
        <Calendario value={value} onChange={setValue}/>
        <Campo tamaño="campo-s" texto="Usuario"/>
        <Campo tamaño="campo-l" texto="Escriba aqui el motivo..."/> */}
       
        <Switch>
          <Route path="/" exact>
            <Login/>
          </Route>
          <Route path="/Home">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Boton from './componentes/Boton/Boton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Boton titulo="Boton" tamaño="22" color="rojo"> </Boton>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Citas pendientes
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

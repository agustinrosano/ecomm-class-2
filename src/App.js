import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-primary d-flex">


        <div className="container-fluid d-flex">
          <a className="navbar-brand" href="#">$HOP</a>


          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav d-flex justify-content-evenly">
                <a className="nav-link" href="#">Licores</a>
                <a className="nav-link" href="#">Bebidas</a>
                <a className="nav-link" href="#">Agua</a>
            </div>
          </div>

          <a className="navbar-brand  d-flex justify-content-end" href="#">Carrito</a>

        </div>
        
      </nav>
    </header>
  );
}

export default App;

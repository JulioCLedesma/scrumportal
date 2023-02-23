import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";




function App() {
  return (

    <div className="layout">
    <header className="header">
        <div className="logo">
            <div className="play"></div>
        </div>
        <h1>MisPelis</h1>
    </header>

      <nav className="nav">
          <ul>
              <li><a href="/#">Inicio</a></li>
              <li><a href="/#">Películas</a></li>
              <li><a href="/#">Blog</a></li>
              <li><a href="/#">Contacto</a></li>
          </ul>
      </nav>

    <section id="content" className="content">
        
        
        {/*LISTADO DE PELÍCULOAS*/}
        <Listado/>


    </section>

    <aside className="lateral">

        <Buscador/>

        <Crear/>

    </aside>

    <footer className="footer">
        &copy; Máster en JavaScript ES12 y TypeScript 
    </footer>
  </div>
  );
}

export default App;

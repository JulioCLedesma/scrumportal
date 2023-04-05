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
        <h1>HOSPITAL GENERAL DE OCCIDENTE</h1>

        <img src={"imagenes/ArbolitosHGO.jpg"}/>
  
    </header>

      <nav className="nav">
          <ul>
             {/*} <li><a href="/#">Inicio</a></li> */}
              <li><a href="/#">Departamento de Calidad</a></li>
              <li><a href="/#">Farmacovigilancia</a></li>
              <li><a href="/#">Tenovigilancia</a></li>
              <li><a href="/#">Mantenimiento</a></li>
              <li><a href="/#">Contacto</a></li>
          </ul>
      </nav>



    <section id="content" className="content">
        
        
        {/*LISTADO DE PELÍCULAS*/}
        <Listado/>


    </section>

    <aside className="lateral">

        <Buscador/>

        <Crear/>


    </aside>

    <footer className="footer">
        &copy; Portal Web HGO-SRCUM LDSW 
    </footer>
  </div>
  );
}

export default App;

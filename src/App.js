import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import './assets/css/estilos.css';
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Designs from "./pages/Designs";
import Photographs from "./pages/Photos";

function App() {
  return (
    <div className="App">
      <div className="containerContent">

        
        <NavBar />
        

        <div>
          <Routes>
            <Route path="/" element={<Menu />}>
              <Route path="/" element={<Home />}/>
              <Route path="About" element={<About />} />
              <Route path="Projects" element={<Projects />} />
              <Route path="Designs" element={<Designs />} />
              <Route path="Photographs" element={<Photographs />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes> 
        </div> 

        
        <div className="fo">
          <div className="containerFooter">
            <div>
              <Footer />
            </div>
          </div>  
        </div>

      </div>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import './assets/css/estilos.css';
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="containerContent">

        <Routes>
          <Route path="/" element={<Menu />}>
            <Route path="/" element={<Home />}/>
            <Route path="About" element={<About />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes> 
      </div>



      <div className="containerFooter">
        <Footer />
      </div> 
    </div>
  );
}

export default App;

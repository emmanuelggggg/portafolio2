import NavBar from "./components/NavBar";
import './assets/css/estilos.css';
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="containerContent">
        <Content />
      </div>
      <div className="containerFooter">
        <Footer />
      </div>
    </div>
  );
}

export default App;

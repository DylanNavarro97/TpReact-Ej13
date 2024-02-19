import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Formulario from "./components/Formulario.jsx";
import { useState } from "react";
import { Container } from "react-bootstrap";

function App() {
  const [climaLugar, setClimaLugar] = useState({});

  const busquedaClima = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2facc09f4169f9adf2a0d9a08ee34b30&units=metric`
      );
      const data = await response.json();
      setClimaLugar(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Formulario busquedaClima={busquedaClima} />
      {Object.keys(climaLugar).length > 0 ? (
        <>
          <Container fluid>
            <Cards climaLugar={climaLugar} />
          </Container>
        </>
      ) : (
        <Container>
          No hay resultado
        </Container>
      )}
    </>
  );
}

export default App;

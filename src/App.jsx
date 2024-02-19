import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Formulario from "./components/Formulario.jsx";
import { useEffect, useState } from "react";

function App() {
  const [climaLugar, setClimaLugar] = useState({})

  const busquedaClima = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2facc09f4169f9adf2a0d9a08ee34b30&units=metric`
      );
      const data = await response.json()
      console.log(data)
      setClimaLugar(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(climaLugar.length)
  })

  return (
    <>
      <Formulario busquedaClima={busquedaClima}/>
      <Cards climaLugar={climaLugar}/>
    </>
  );
}

export default App;

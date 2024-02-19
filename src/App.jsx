import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Formulario from "./components/Formulario.jsx";
import { useState } from "react";

function App() {

  const [latYLong, setLatYLong] = useState({
    lat: "0",
    lon: "0"
  })

  const setearLatyLon = (lat, lon) => {
    setLatYLong({
      lat: lat,
      lon: lon 
    })
  }

  return (
    <>
      <Formulario setearLatyLon={setearLatyLon}/>
      <Cards />
    </>
  );
}

export default App;

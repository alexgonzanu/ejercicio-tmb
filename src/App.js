import { useEffect, useState } from "react";
import Formalurio from "./componentes/Formulario";
import InfoParada from "./componentes/InfoParada";
import BuscarParadaContext from "./contexts/BuscarParada";
import useFetch from "./hooks/useFetch";

function App() {
  const { datos: parada, pedirDatos: pedirParada } = useFetch();
  const { datos: lineas, pedirDatos: pedirLineas } = useFetch();
  const [numeroParada, setNumeroParada] = useState();
  const [ocultarFraseLineas, setOcultarFraseLineas] = useState(true);
  const [ocultarFraseTiempo, setOcultarFraseTiempo] = useState(true);

  useEffect(() => {
    if (numeroParada) {
      pedirParada(`https://api.tmb.cat/v1/transit/parades/${numeroParada}?app_id=2e664cd9&app_key=1467b472741cc9c864924b643009e7e4`);
    }
  }, [numeroParada, pedirParada]);

  useEffect(() => {
    if (parada) {
      pedirLineas(`https://api.tmb.cat/v1/ibus/stops/${numeroParada}?app_id=2e664cd9&app_key=1467b472741cc9c864924b643009e7e4`);
    }
  }, [numeroParada, parada, pedirLineas]);

  return (
    <BuscarParadaContext.Provider value={{ numeroParada, parada, setNumeroParada, setOcultarFraseLineas }}>
      <div className="contenedor">
        <InfoParada ocultarFraseTiempo={ocultarFraseTiempo} />
        <Formalurio ocultarFraseLineas={ocultarFraseLineas} />
        {/*<header className="cabecera">
        <h2>Bus 109 - Hospital Clínic / Polígon Zona Franca</h2>
        <h3>Polígon Zona Franca -> Hospital Clínic</h3>
        <a href="#">Volver a la portada</a>
      </header>
      <section>
        <ul className="grafico-paradas">
          <li className="parada">Parada nº X: Nombre parada (<a href="#">ver mapa</a>)</li>
          <li className="parada">Parada nº 1741: Cotxeres TB Zona Franca (<a href="#">ver mapa</a>)</li>
          <li className="parada">Parada nº 1045: Pg Zona Franca - Motors (<a href="#">ver mapa</a>)</li>
          <li className="parada">Parada nº 1615: Carrer número 4 - Carrer D (<a href="#">ver mapa</a>)</li>
          <li className="parada">Parada nº 1639: Carrer A- Comissaria Portuària (<a href="#">ver mapa</a>)</li>
          <li className="parada">Parada nº 1643: Mercabarna - Mercat del Peix (<a href="#">ver mapa</a>)</li>
        </ul>
      </section>*/}
      </div>
    </BuscarParadaContext.Provider>
  );
}

export default App;

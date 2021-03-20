import { useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import BuscarParadaContext from "./contexts/BuscarParada";
import InfoLineaEncontrada from "./contexts/InfoLineaEncontrada";
import LineasParadaContext from "./contexts/LineasParadaContext";
import useFetch from "./hooks/useFetch";
import InfoLinea from "./paginas/InfoLinea";
import NotFound from "./paginas/NotFound";
import Parada from "./paginas/Parada";

function App() {
  const { datos: parada, pedirDatos: pedirParada } = useFetch();
  const { datos: lineas, pedirDatos: pedirLineas } = useFetch();
  const { datos: numeroLineaCogida, pedirDatos: pedirLineaEncontrada } = useFetch();
  const [numeroParada, setNumeroParada] = useState("");
  const [numeroLinea, setNumeroLinea] = useState("");
  const [numLineaCogida, setNumeroLineaCogida] = useState(null);
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

  useEffect(() => {
    if (numLineaCogida) {
      pedirLineaEncontrada(`https://api.tmb.cat/v1/transit/linies/bus/${numLineaCogida}/parades?app_id=2e664cd9&app_key=1467b472741cc9c864924b643009e7e4`);
    }
  }, [numLineaCogida, pedirLineaEncontrada]);

  return (
    <Router>
      <BuscarParadaContext.Provider value={{ numeroParada, parada, setNumeroParada, setOcultarFraseLineas, setOcultarFraseTiempo }}>
        <LineasParadaContext.Provider value={{ parada, lineas, numeroLinea, setNumeroLinea, setOcultarFraseTiempo }}>
          <InfoLineaEncontrada.Provider value={{ numeroLineaCogida, setNumeroLineaCogida }}>
            <Switch>
              <Route path="/parada" exact>
                <Parada ocultarFraseLineas={ocultarFraseLineas} ocultarFraseTiempo={ocultarFraseTiempo} />
              </Route>
              <Route path="/linea" exact>
                <InfoLinea numeroLineaCogida={numeroLineaCogida} />
              </Route>
              <Route path="/" exact>
                <Redirect to="/parada" />
              </Route>
              <Route path="*" exact>
                <NotFound />
              </Route>
            </Switch>
          </InfoLineaEncontrada.Provider>
        </LineasParadaContext.Provider>
      </BuscarParadaContext.Provider>
    </Router>
  );
}

export default App;

import { useContext, useEffect, useRef, useState } from "react";
import LineasParadaContext from "../contexts/LineasParadaContext";

const DisplayParada = () => {
  const infoLineasBus = useContext(LineasParadaContext);
  const { lineas, parada } = infoLineasBus;
  const [topLineasParada, setTopLineasParada] = useState(0);
  const intervalMovimiento = useRef();

  useEffect(() => {
    if (parada) {
      if (parada.numberMatched !== 0) {
        let numeroDeRepeticiones = 0;
        intervalMovimiento.current = setInterval(() => {
          setTopLineasParada((top) => top - 30);
          numeroDeRepeticiones++;
          if (numeroDeRepeticiones === lineas.data.ibus.length) {
            numeroDeRepeticiones = 0;
            setTopLineasParada(0);
          }

        }, 5000);
      }
    }
    return () => clearInterval(intervalMovimiento.current);
  }, [lineas, parada]);

  return (
    <div className="display">
      {
        lineas && lineas.data.ibus.map(bus =>
          <div key={bus.routeId} className="bus" style={{ top: `${topLineasParada}px` }}>
            <span className="linea">{bus.line}</span>
            <span className="destino">{bus.destination}</span>
            <span className="tiempo">{bus["text-ca"]}</span>
          </div>)

      }
    </div>
  );
};

export default DisplayParada;

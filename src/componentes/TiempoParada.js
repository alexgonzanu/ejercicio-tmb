import { useContext } from "react";
import LineasParadaContext from "../contexts/LineasParadaContext";

const TiempoParada = () => {
  const infoLinea = useContext(LineasParadaContext);
  const { lineas, numeroLinea } = infoLinea;
  return (
    <h2>{`Tiempo para la línea ${numeroLinea}: ${lineas.data.ibus.filter(bus => bus.line === numeroLinea)[0]["text-ca"]}`}</h2>
  );
};

export default TiempoParada;

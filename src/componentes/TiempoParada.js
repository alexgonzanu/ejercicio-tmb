import { useContext } from "react";
import LineasParadaContext from "../contexts/LineasParadaContext";

const TiempoParada = () => {
  const infoLinea = useContext(LineasParadaContext);
  const { numeroLinea } = infoLinea;
  return (
    <h2>{`Tiempo para la línea ${numeroLinea}`}</h2>
  );
};

export default TiempoParada;

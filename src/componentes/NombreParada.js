import { useContext } from "react";
import BuscarParadaContext from "../contexts/BuscarParada";

const NombreParada = () => {
  const { numeroParada, parada } = useContext(BuscarParadaContext);
  return (
    <h1>{`Parada nº ${parada !== null ? (parada.numberMatched === 0 ? `${numeroParada} no existe` : `${numeroParada}`) : ""}`}</h1>
  );
};

export default NombreParada;

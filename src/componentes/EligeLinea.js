import { useContext } from "react";
import LineasParadaContext from "../contexts/LineasParadaContext";

const EligeLinea = () => {
  const lineasParadaBus = useContext(LineasParadaContext);
  const { lineas, setNumeroLinea, setOcultarFraseTiempo } = lineasParadaBus;
  const elegirLinea = e => {
    setNumeroLinea(e.target.value);
    setOcultarFraseTiempo(false);
  };
  return (
    <form>
      <label htmlFor="tiempo-linea">Tiempo para que llegue la línea: </label>
      <select id="tiempo-linea" onChange={elegirLinea}>
        <option value="">Elige línea</option>
        {
          lineas && lineas.data.ibus.map(linea => {
            return <option key={linea.routeId} value={`${linea.line}:${linea["text-ca"]}`} >{linea.line}</option>;
          })

        }
      </select>
    </form>
  );
};

export default EligeLinea;

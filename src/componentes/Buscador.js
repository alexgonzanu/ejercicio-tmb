import { useContext, useEffect, useState } from "react";
import BuscarParadaContext from "../contexts/BuscarParada";

const Buscador = () => {
  const paradaBus = useContext(BuscarParadaContext);
  const { numeroParada, parada, setNumeroParada, setOcultarFraseLineas, setOcultarFraseTiempo } = paradaBus;
  const [numeroParadaAuxiliar, setNumeroParadaAuxiliar] = useState(0);

  useEffect(() => {
    if (parada) {
      if (parada.numberMatched !== 0) {
        setOcultarFraseLineas(false);
      } else {
        setOcultarFraseLineas(true);
        setOcultarFraseTiempo(true);
      }
    }
  }, [parada, setOcultarFraseLineas, setOcultarFraseTiempo]);
  const cambiarInput = e => {
    setNumeroParadaAuxiliar(e.target.value);
  };
  const buscarParada = (e) => {
    e.preventDefault();
    setNumeroParada(numeroParadaAuxiliar);
  };

  return (
    <form onSubmit={buscarParada}>
      <label htmlFor="num-parada">Parada nº: </label>
      <input type="number" id="num-parada" value={numeroParadaAuxiliar} onChange={cambiarInput} />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default Buscador;

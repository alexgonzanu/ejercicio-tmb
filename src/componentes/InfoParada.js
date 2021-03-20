import PropTypes from "prop-types";
import DisplayParada from "./DisplayParada";
import NombreParada from "./NombreParada";
import TiempoParada from "./TiempoParada";

const InfoParada = (props) => {
  const { ocultarFraseTiempo } = props;
  return (
    <header className="cabecera">
      <NombreParada />
      <DisplayParada />
      {
        ocultarFraseTiempo === false && <TiempoParada />
      }
    </header>
  );
};
InfoParada.propTypes = {
  ocultarFraseTiempo: PropTypes.bool.isRequired
};
export default InfoParada;

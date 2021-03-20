import PropTypes from "prop-types";
import Buscador from "./Buscador";
import EligeLinea from "./EligeLinea";

const Formulario = (props) => {
  const { ocultarFraseLineas } = props;
  return (
    <section className="forms">
      <Buscador />
      {
        ocultarFraseLineas === false && <EligeLinea />
      }
    </section>
  );
};

Formulario.propTypes = {
  ocultarFraseLineas: PropTypes.bool.isRequired
};
export default Formulario;

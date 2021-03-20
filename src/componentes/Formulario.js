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

export default Formulario;

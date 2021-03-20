import InfoParada from "../componentes/InfoParada";
import Formalurio from "../componentes/Formulario";

const Parada = (props) => {
  const { ocultarFraseTiempo, ocultarFraseLineas } = props;
  return (
    <div className="contenedor">
      <InfoParada ocultarFraseTiempo={ocultarFraseTiempo} />
      <Formalurio ocultarFraseLineas={ocultarFraseLineas} />
    </div>
  );
};

export default Parada;

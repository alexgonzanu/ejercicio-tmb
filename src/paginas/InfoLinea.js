
const InfoLinea = (props) => {
  const { numeroLineaCogida } = props;
  return (
    <>
      {
        numeroLineaCogida && <>
          <header className="cabecera">
            <h2>{`Bus ${numeroLineaCogida.features[0].properties.CODI_LINIA} - ${numeroLineaCogida.features[0].properties.DESC_LINIA}`}</h2>
            <h3>{`${numeroLineaCogida.features[0].properties.ORIGEN_SENTIT} -> ${numeroLineaCogida.features[0].properties.DESTI_SENTIT}`}</h3>
            <a href="/">Volver a la portada</a>
          </header>
          <section>
            <ul className="grafico-paradas">
              {
                numeroLineaCogida.features.map(parada => <li
                  key={parada.properties.CODI_FAMILIA}
                  className="parada">
                  {`Parada nº ${parada.properties.CODI_PARADA}: ${parada.properties.NOM_PARADA}`}(<a href="#">ver mapa</a>)</li>)
              }
            </ul>
          </section>
        </>
      }
    </>
  );
};

export default InfoLinea;

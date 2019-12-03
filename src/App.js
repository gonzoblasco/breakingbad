import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Frase = ({ frase }) => (
  <div className="frase">
    <h1>{frase.quote}</h1>
    <p>- {frase.author}</p>
  </div>
);

const App = () => {
  const [frase, obtenerFrase] = useState({});

  const consultarAPI = async() => {
    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    obtenerFrase(resultado.data[0]);
  };

  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <div className="contenedor">
      <Frase frase={frase} />
      <button onClick={consultarAPI} type="button">Generar Nueva</button>
    </div>
  );
};

export default App;

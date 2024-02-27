import { useState } from 'react';
import CountryCheckbox from './components/CountryCheckbox';

function App() {
  const [countriesSelection, setCountriesSelection] = useState<number[]>([]);

  return (
    <>
      <h1>Luka Cerrutti</h1>
      <a href="https://www.linkedin.com/in/lce/" target="_blank" rel="noreferrer">
        LinkedIn
      </a>
      <hr />
      <CountryCheckbox countriesSelection={countriesSelection} setCountriesSelection={setCountriesSelection} />
      <hr />
      <span>
        <b>IDs seleccionadas:</b> {countriesSelection.join(', ')}
      </span>
    </>
  );
}

export default App;

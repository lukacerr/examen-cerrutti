import { useMemo } from 'react';
import { countries, countriesIds } from '../constants/countries.constant';
import SetStateFunction from '../types/set-state-function.type';
import removeArrayValue from '../utils/remove-array-value.util';

export interface ICountryCheckbox {
  countriesSelection: number[];
  setCountriesSelection: SetStateFunction<number[]>;
}

function CountryCheckbox({ countriesSelection, setCountriesSelection }: React.PropsWithRef<ICountryCheckbox>) {
  const isAllSelected = useMemo(() => countries.length === countriesSelection.length, [countriesSelection]);

  const handleSelectAll = () => setCountriesSelection(isAllSelected ? [] : countriesIds);

  const handleCheck = (id: number, checked: boolean) =>
    setCountriesSelection((selection) => (checked ? [...selection, id] : removeArrayValue(selection, id)));

  return (
    <div>
      <label className="label">Checkbox de países</label>
      <ul>
        <li>
          <input type="checkbox" checked={isAllSelected} onChange={handleSelectAll} /> Select All
        </li>
        {countries.map(({ id, label }) => (
          <li key={id}>
            <input
              type="checkbox"
              checked={countriesSelection.includes(id)}
              onChange={(e) => handleCheck(id, e.target.checked)}
            />
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryCheckbox;

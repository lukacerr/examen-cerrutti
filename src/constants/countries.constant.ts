import IdLabelPair from '../types/id-label-pair.interface';

export const countries: IdLabelPair[] = [
  { label: 'India', id: 1 },
  { label: 'USA', id: 2 },
  { label: 'France', id: 3 },
];

export const countriesIds = countries.map((c) => c.id);

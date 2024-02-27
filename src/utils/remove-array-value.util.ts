export default function removeArrayValue<T>(arr: T[], value: T, avoidDuplication = false): T[] {
  const array = avoidDuplication ? arr : [...arr];
  const index = array.indexOf(value);
  if (index !== -1) array.splice(index, 1);
  return array;
}

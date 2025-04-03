export default function hasValuesFromArray(set, array) {
  if (!(Array.isArray(array))) {
    return false;
  }
  if (!(set instanceof Set)) {
    return false;
  }
  for (const element of array) {
    if (!set.has(element)) {
      return false;
    }
  }
  return true;
}

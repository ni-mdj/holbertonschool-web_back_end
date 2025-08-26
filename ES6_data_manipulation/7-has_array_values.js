// vérifier que tous les éléments d’un tableau sont présents dans le Set
// every retourne true si la condition est vraie pour tous les éléments. Pour chaque val, on interroge set.has(val) (O(1) en moyenne)
export default function hasValuesFromArray(set, array) {
    return array.every((val) => set.has(val));
  }
  
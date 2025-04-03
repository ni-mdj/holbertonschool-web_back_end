export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return ''; // Si startString n'est pas une chaîne, ou vide, retourner une chaîne vide
  }

  const resultArray = []; // On initialise un tableau pour stocker les résultats

  for (const value of set) { // On parcourt chaque valeur de l'ensemble
    if (value.startsWith(startString)) { // On vérifie si la valeur commence par startString
      resultArray.push(value.slice(startString.length)); // On ajoute le reste de la chaîne
    }
  }

  return resultArray.join('-'); // On retourne les éléments du tableau jointe par '-'
}

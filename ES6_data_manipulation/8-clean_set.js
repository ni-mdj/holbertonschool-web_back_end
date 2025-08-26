// retourner une chaîne composée des suffixes des valeurs du set qui commencent par startString, séparés par -
// Si startString est vide → on renvoie '' (comportement vu dans l’exemple). On itère le Set : On ne garde que les chaînes qui startsWith(startString). On prend la partie restante avec slice(startString.length). On joint avec '-'.

export default function cleanSet(set, startString) {
    if (!(set instanceof Set) || typeof startString !== 'string' || startString === '') {
      return '';
    }
  
    const parts = [];
    for (const value of set) {
      if (typeof value === 'string' && value.startsWith(startString)) {
        parts.push(value.slice(startString.length));
      }
    }
    return parts.join('-');
  }
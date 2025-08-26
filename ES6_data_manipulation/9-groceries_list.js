// retourner une Map des courses avec quantités.
// new Map([...]) initialise une map avec des paires [clé, valeur]. Avantage d’une Map vs objet : ordre d’insertion garanti, clés de n’importe quel type, méthodes dédiées (get, set, has, forEach, etc.)

export default function groceriesList() {
    return new Map([
      ['Apples', 10],
      ['Tomatoes', 10],
      ['Pasta', 1],
      ['Rice', 1],
      ['Banana', 5],
    ]);
  }
// extraits tous les id de la liste étudiants
// on sécurise l’entrée : si c'est pas un array ensuite on renvoie [] qui est le comportement exigé
export default function getListStudentIds(list) {
    if (!Array.isArray(list)) return [];
    return list.map((student) => student.id);
  }
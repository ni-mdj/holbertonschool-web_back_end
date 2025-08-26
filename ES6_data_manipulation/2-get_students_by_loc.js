// garde que les étudiants de la ville donnée
// sécurité sur le type d’entrée, filter garde uniquement les objets qui vérifient la condition student.location === city.
export default function getStudentsByLocation(students, city) {
    if (!Array.isArray(students)) return [];
    return students.filter((student) => student.location === city);
  }
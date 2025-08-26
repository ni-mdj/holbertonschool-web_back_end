// sommer tous les id de la liste d'etudiants
// Sécurité → si pas un array, on renvoie 0. reduce agrège toutes les valeurs dans un accumulateur (sum), en partant de 0
export default function getStudentIdsSum(students) {
    if (!Array.isArray(students)) return 0;
    return students.reduce((sum, student) => sum + student.id, 0);
  }
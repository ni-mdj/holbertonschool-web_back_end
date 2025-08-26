// pour une ville, renvoyer la liste des étudiants avec leur grade mis à jour. Si un étudiant n’a pas de note dans newGrades → 'N/A'
// convertit newGrades (tableau d’objets { studentId, grade }) en Map : clé = studentId, valeur = grade.
export default function updateStudentGradeByCity(students, city, newGrades) {
    if (!Array.isArray(students)) return [];
    const gradesArray = Array.isArray(newGrades) ? newGrades : [];
    const gradesMap = new Map(
      gradesArray.map(({ studentId, grade }) => [studentId, grade]),
    );
  
    return students
      .filter((s) => s.location === city)
      .map((s) => ({
        ...s,
        grade: gradesMap.has(s.id) ? gradesMap.get(s.id) : 'N/A',
      }));
  }
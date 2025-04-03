export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((student) => student.location === city);
  return studentsInCity.map((student) => {
    const studentGrades = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: studentGrades ? studentGrades.grade : 'N/A',
    };
  });
}

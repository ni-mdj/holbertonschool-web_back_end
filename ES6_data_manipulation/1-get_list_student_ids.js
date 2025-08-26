// extraits tous les id de la liste étudiants
export default function getListStudentIds(list) {
    if (!Array.isArray(list)) return [];
    return list.map((student) => student.id);
  }
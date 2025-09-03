// fonction lit un fichier CSV en mode synchrone et affiche le nmbre d’étudiants par filière

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').trim().split('\n');
    data.shift();

    console.log(`Number of students: ${data.length}`);

    const fields = {};
    data.forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstname);
    });

    for (const [field, students] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
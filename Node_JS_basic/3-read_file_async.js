// asynchrone avec Promisees lecture d’un fichier CSV et affiche le nombre d’étudiants
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.trim().split('\n').slice(1);
      const students = {};
      lines.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (field) {
          if (!students[field]) students[field] = [];
          students[field].push(firstname);
        }
      });

      console.log(`Number of students: ${lines.length}`);
      for (const field in students) {
        console.log(
          `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`,
        );
      }
      resolve();
    });
  });
}

module.exports = countStudents;

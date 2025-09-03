/**
 * Ce script crée un serveur HTTP avec Express :
 * - Le serveur écoute sur le port 1245.
 * - Route "/" → renvoie "Hello Holberton School!".
 * - Route "/students" → renvoie la liste des étudiants :
 *     * Affiche "This is the list of our students"
 *     * Affiche le nombre total d'étudiants
 *     * Affiche le nombre d'étudiants par filière (CS, SWE, …) avec leur liste
 * - Le fichier CSV est passé en argument lors de l'exécution :
 *     node 7-http_express.js database.csv
 *
 * Le module exporte la variable `app` pour permettre les tests automatiques.
 */
const express = require('express');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const messages = [];
      let message;
      const content = data.toString().split('\n');
      let students = content.filter((item) => item);
      students = students.map((item) => item.split(','));
      const nStudents = students.length ? students.length - 1 : 0;
      message = `Number of students: ${nStudents}`;
      messages.push(message);

      const subjects = {};
      for (const i in students) {
        if (i !== 0) {
          if (!subjects[students[i][3]]) subjects[students[i][3]] = [];
          subjects[students[i][3]].push(students[i][0]);
        }
      }
      delete subjects.field;
      for (const key of Object.keys(subjects)) {
        if (key && key !== 'undefined') {
          message = `Number of students in ${key}: ${
            subjects[key].length
          }. List: ${subjects[key].join(', ')}`;
          messages.push(message);
        }
      }
      resolve(messages);
    });
  });
}
const app = express();
const port = 1245;
const dbPath = process.argv[2];
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  const responseLines = ['This is the list of our students'];
  countStudents(dbPath)
    .then((messages) => {
      responseLines.push(...messages);
      res.send(responseLines.join('\n'));
    })
    .catch((error) => {
      responseLines.push(error.message);
      res.send(responseLines.join('\n'));
    });
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
module.exports = app;
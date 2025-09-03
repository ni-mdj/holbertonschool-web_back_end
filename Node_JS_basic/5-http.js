/**
 * http
 *
 * Petit serveur HTTP natif avec Node.js :
 * - Route "/" → "Hello Holberton School!"
 * - Route "/students" → affiche la liste des étudiants depuis la base CSV
 * - Gestion des erreurs si le fichier n'est pas accessible
 * - Écoute sur le port 1245
 */

const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length <= 1) {
        resolve(['Number of students: 0']);
        return;
      }

      const students = lines.slice(1).map((line) => line.split(','));
      const messages = [];
      messages.push(`Number of students: ${students.length}`);

      const fields = {};
      for (const student of students) {
        const firstname = student[0];
        const field = student[3];
        if (field) {
          if (!fields[field]) fields[field] = [];
          fields[field].push(firstname);
        }
      }

      for (const [field, list] of Object.entries(fields)) {
        messages.push(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      }

      resolve(messages);
    });
  });
}

const dbPath = process.argv[2];
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(dbPath)
      .then((messages) => {
        res.end(messages.join('\n'));
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;

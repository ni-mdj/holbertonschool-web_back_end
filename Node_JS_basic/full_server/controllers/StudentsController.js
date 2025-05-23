import readDatabase from '../utils';

/**
 * Controller class that handles student-related HTTP requests
 * Contains static methods to handle different student endpoints
 */
class StudentsController {
  /**
   * Handles GET /students route
   * Returns all students grouped by their field of study
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  static getAllStudents(req, res) {
    const databaseFile = process.argv[2];
    readDatabase(databaseFile)
      .then((students) => {
        let responseText = 'This is the list of our students\n';
        const sortedFields = Object.keys(students).sort();
        sortedFields.forEach((field) => {
          responseText += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
        });
        res.status(200).send(responseText.trim());
      })
      .catch((err) => {
        res.status(500).send('Cannot load the database');
      });
  }

  /**
   * Handles GET /students/:major route
   * Returns students filtered by a specific major (CS or SWE)
   * @param {Object} req - Express request object (contains req.params.major)
   * @param {Object} res - Express response object
   */
  static getAllStudentsByMajor(req, res) {
    const databaseFile = process.argv[2];
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(databaseFile)
      .then((students) => {
        if (!students[major]) {
          res.status(200).send('List:');
        } else {
          res.status(200).send(`List: ${students[major].join(', ')}`);
        }
      })
      .catch((err) => {
        res.status(500).send('Cannot load the database');
      });
  }
}
export default StudentsController;

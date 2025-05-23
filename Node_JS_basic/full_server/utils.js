import fs from 'fs';

/**
 * Reads a CSV database file and groups students by their field of study
 * @param {string} path - The path to the CSV file
 * @returns {Promise} - A promise that resolves to an object with fields as keys and arrays of student firstnames as values
 */
const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(Error('Cannot load the database'));
    } else {
      const [headerLine, ...lines] = data.split('\n').filter((line) => line.length > 0);
      const headers = headerLine.split(',');
      const listObj = lines.map((line) => line.split(',').reduce((object, currentValue, index) => Object.assign(object, { [headers[index]]: currentValue }), {}));
      const groupByField = listObj.reduce((res, currentValue) => {
        res[currentValue.field] = res[currentValue.field] || [];
        res[currentValue.field].push(currentValue.firstname);
        return res;
      }, {});
      resolve(groupByField);
    }
  });
});
export default readDatabase;

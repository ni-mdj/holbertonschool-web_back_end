import express from 'express';

const app = express();
const port = 1245;
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
export default app;

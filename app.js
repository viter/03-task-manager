require('dotenv').config();
const express = require('express');
const tasks = require('./routes/tasks');

const app = express();

app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('Task Manager App');
});


app.use('/api/v1/tasks', tasks);

const port = process.env.PORT | 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
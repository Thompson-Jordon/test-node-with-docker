const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/add/:num1/:num2', (req, res) => {
  const num1 = req.params.num1;
  const num2 = req.params.num2;
  const sum = num1 + num2;
  res.send(`${num1} + ${num2} = ${sum}`);
});

app.get('/hmm', (req, res) => {
  res.send('Thinking...');
});

app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`)
})
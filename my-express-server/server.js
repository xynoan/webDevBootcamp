const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/about', (req, res) => {
    res.send('Hi I\'m Nathaniel Carlo Morva and I like making web apps.')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
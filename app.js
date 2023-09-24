const express = require('express');
const app = express();

app.get('/', (req,res) => {
  res.send('Hello world from node js');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`A Nodejs API is listing on: ${PORT}`);
});
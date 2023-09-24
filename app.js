const express = require('express');
const app = express();

const {getPosts} = require('./routes/posts.js');

app.get("/", getPosts);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`A Nodejs API is listing on: ${PORT}`);
});
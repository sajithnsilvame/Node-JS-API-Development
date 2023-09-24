const express = require('express');
const app = express();
const morgan = require('morgan');

// HTTP request logger middleware for node.js
app.use(morgan('dev'));

const {getPosts} = require('./routes/posts.js');
const {myOwnMiddleware} = require('./middleware/myOwnMiddleware.js');

app.use(myOwnMiddleware);

app.get("/", getPosts);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`A Nodejs API is listing on: ${PORT}`);
});
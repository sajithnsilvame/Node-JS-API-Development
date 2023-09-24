const express = require("express");
const app = express();
const morgan = require("morgan");

// HTTP request logger middleware for node.js
app.use(morgan("dev"));

const { postRoutes } = require("./routes/post.js");
app.use("/", postRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`A Nodejs API is listening on: ${PORT}`);
});

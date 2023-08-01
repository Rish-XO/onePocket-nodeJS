const express = require("express");

const app = express()

const PORT = 3000; // We should put port number in env file in projects


// task 1 , print hello world
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

//

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});

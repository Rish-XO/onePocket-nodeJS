const app = require("express");

const PORT = 3000; // We should put port number in env file in projects

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});

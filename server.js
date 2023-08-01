const express = require("express");
const fs = require("fs");

const app = express();

const PORT = 3000; // We should put port number in env file in projects

// task 1 , print hello world
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

//task 2, sum of integers in array
const sumOfArray = (arr) => {
  return arr.reduce((sum, num) => sum + num, 0);
};

// testing of task 2
console.log(sumOfArray([1, 2, 3, 4])); // consoles 10

//task 3, file reading
const countWords = (text) => {
    
}

const fileName = "data.txt"; //assuming the file is in the directory


app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});

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

// task 3, file reading
const countWords = (text) => {
  const words = text.split(/\s+/).filter((word) => word !== "");
  return words.length;
};

// testing the countWords function
console.log(countWords("Hello, My name is Rishal a Full stack developer")); // prints 9

const fileName = "data.txt"; //assuming the file is in the directory

fs.readFile(fileName, "utf-8", (err, data) => {
  if (err) {
    console.error(`Error reading the file: ${err.message}`);
    return;
  }
  const wordCount = countWords(data);
  console.log(`Total word count : ${wordCount}`);
});

// server listening
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});

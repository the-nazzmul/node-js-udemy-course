const fs = require("node:fs");

//Task: Read the contents of notes.txt

console.log("Start of Script");

//Sync => Blocking operations
// const content = fs.readFileSync("notes.txt", "utf-8");
// console.log(content);

//Async => Non-blocking operations
fs.readFile("notes.txt", "utf-8", function (error, data) {
  if (error) console.log(error);
  else console.log(data);
});

console.log("End of Script");

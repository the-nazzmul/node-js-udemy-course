const fs = require("node:fs");

const content = fs.readFileSync("notes.txt", "utf-8");

fs.writeFileSync("copy.txt", content, "utf-8"); //it overwrites the content

fs.appendFileSync("copy.txt", "\n\nhey", "utf-8"); //appends to existing file

fs.mkdirSync("games/xyz/a", { recursive: true });
fs.rmdirSync("games");

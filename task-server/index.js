import http from "node:http";
import fs from "node:fs";

const server = http.createServer((req, res) => {
  const method = req.method;
  const path = req.url;

  const log = `\n[${Date.now()}]: ${method} ${path}`;
  fs.appendFileSync(`log.txt`, log, "utf-8");

  switch (method) {
    case "GET": {
      switch (path) {
        case "/":
          return res.writeHead(200).end("Hello from the server");
        case "/contact-us":
          return res
            .writeHead(200)
            .end("Email: nazzmul.dev@gmail.com and Contact: +8801700000000");
        case "/tweet":
          return res.writeHead(200).end("tweet-1\ntweet-2");
      }
    }
    case "POST": {
      switch (path) {
        case "/tweet":
          return res.writeHead(201).end(`Tweet created!`);
      }
    }
    default:
      return res.writeHead(404).end(`You're lost nigga!`);
  }
});

server.listen(8000, () => {
  console.log(`Server is running on port: 8000`);
});

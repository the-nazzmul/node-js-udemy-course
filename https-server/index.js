import http from "node:http";

const server = http.createServer((req, res) => {
  console.log(`Incoming request at [${Date.now()}]`);
  console.log(req.method);

  switch (req.url) {
    case "/":
      res.writeHead(200);
      return res.end(`Homepage`);
    case "/contact-us":
      res.writeHead(200);
      return res.end("Contact me at nazzmul.dev@mail.com");
    case "/about":
      res.writeHead(200);
      return res.end(`I am a software engineer`);

    default:
      res.writeHead(404);
      res.end(`You're lost nigga!`);
  }
});

server.listen(8000, () => {
  console.log("Server is running on port: 8000");
});

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Backend API is running successfully");
  }
});

server.listen(5000, () => {
  console.log("Backend running on port 5000");
});

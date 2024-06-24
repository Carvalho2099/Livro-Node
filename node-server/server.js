const http = require("http");

const server = http.createServer((req, resp) => {
  const headers = req.headers;
  const method = req.method;
  const url = req.url;

  console.log("Servidor acessado!");
  console.log("headers");
  console.log(headers);
  console.log("method: " + method);
  console.log("url: " + url);

  if (req.url === "/teste") {
    resp.setHeader("Content-type", "text/html");
    resp.end("<h1> Olá Mundo!</h1>");
  }

  if (req.url === "/json") {
    resp.setHeader("Content-type", "application/json");
    const data = {
      id: 1,
      name: "user",
    };
    resp.end(JSON.stringify(data));
  }
});

server.listen(3000);

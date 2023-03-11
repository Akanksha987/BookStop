const fs = require("fs");
const server = http.createServer((req, res) => {
  if ((req.url = "/book")) {
    res.end("Creating an API");
  }
});
server.listen(5000, () => {
  console.log("Port 5000");
});

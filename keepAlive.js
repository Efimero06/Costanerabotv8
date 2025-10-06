const express = require("express");
const server = express();

server.all("/", (req, res) => {
  res.send("El bot está activo ✅");
});

function keepAlive() {
server.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor web activo en el puerto ${process.env.PORT || 3000}`);
  });
}

module.exports = keepAlive;
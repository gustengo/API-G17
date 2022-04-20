const jwt = require("./src/lib/jwt");

jwt.sign({ sub: "12321", name: "Gustavo" }).then((token) => {
  console.log("El token es: ", token);
});

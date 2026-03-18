const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [];

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  users.push({ username, password });
  res.send("Usuário criado");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => 
    u.username === username && u.password === password
  );

  if (user) {
    res.send("Login OK");
  } else {
    res.status(401).send("Erro login");
  }
});

app.listen(PORT, () => {
  console.log("Servidor rodando...");
});

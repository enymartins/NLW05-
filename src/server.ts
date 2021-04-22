import express from "express";

import "./database";

const app = express();


app.get("/", (req, res) => {
  return res.json({ message: "Olá NLW-05" });
});

app.post("/", (req, res) => {
  return res.json({ message: "Usuário salvo com sucesso!"})
})

app.listen(3333, () => console.log('Server is running'));
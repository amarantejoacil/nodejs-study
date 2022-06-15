const { response } = require("express");
const { request } = require("express");
const { v4:uuidv4 } = require("uuid");
const express = require("express");

const app = express();
app.use(express.json());

customers = [];
app.post("/account", (request, response) => {
  const { cpf, name } = request.body;
  const id = uuidv4();

  customers.push({
    cpf,
    name,
    id,
    statement: [],
  });
  return response.status(201).send();
});

app.listen(3333);
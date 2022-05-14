const { response } = require('express');
const { request } = require('express');
const express = require('express');
const app = express();
app.use(express.json());


/**
 * Tipos de parametros
 * #Router Parms: identificar/ deletar ou buscar
 * #Query Parms: utilizando em paginação, filtros
 * {{ _.baseURL }}/courses?page=1&order=asc&mandioca=1 enviado query parms no insomina ,exemplo 1
 * 
 * #Body Parms: insercão ou alteração [JSON]
 * 
 */


//GET
app.get("/courses", (request, response) => {
  const query = request.query
  console.log(query)
  
  return response.json();
})

//POST
app.post("/courses", (request, response) => {
  const body = request.body
  console.log(body)
  return response.json(["Curso 1"]);
})
app.patch("/courses", (request, response)=> {
  return response.json(["PAtch"])
} )

//PUT
app.put("/courses/:id", (request, response)=> {
  const parametro = request.params
  console.log(parametro)
  return response.json(["put"])
})


//DELETE
app.delete("/courses", (request, response) => {
  return response.json(["delete"])
})

app.listen(3333)
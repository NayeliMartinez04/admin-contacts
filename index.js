const express = require("express");
const server = express();

server.use(express.static("public"));

server.get("/", (request, response) => {
  return response.sendFile(__dirname + "/views/index.html");
});

server.get("/contacts", (request, response) => {
  return response.sendFile(__dirname + "/views/contacts.html");
});

server.get("/addContact", (request, response) => {
  return response.sendFile(__dirname + "/views/form.html");
});

server.use((request, response) => {
  return response.sendFile(__dirname + "/views/404.html");
});

server.listen(3000, () => {
  console.log("Aplication running!");
});

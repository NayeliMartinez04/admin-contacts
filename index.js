const express = require("express");
const server = express();
const { ContactController } = require("./controllers");

server.use(express.static("public"));
server.use(express.json());

server.get("/", (request, response) => {
  return response.sendFile(__dirname + "/views/index.html");
});

server.get("/contacts", (request, response) => {
  return response.sendFile(__dirname + "/views/contacts.html");
});

server.get("/addContact", (request, response) => {
  return response.sendFile(__dirname + "/views/form.html");
});

//api methods
server.get("/getContacts", ContactController.getContacts);
server.post("/createContact", ContactController.createContact);
server.put("/updateContact/:id", ContactController.updateContact);
server.delete("/deleteContact/:id", ContactController.deleteContact);

server.use((request, response) => {
  return response.sendFile(__dirname + "/views/404.html");
});

server.listen(process.env.PORT || 3000, () => {
  console.log("Aplication running!");
});

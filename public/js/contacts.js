window.onload = async function() {
  const contacts = await axios.get("/getContacts");
  const tbody = document.getElementById("table");
  window.contacts = contacts.data;
  for (const contact of contacts.data) {
    tbody.innerHTML += `
    <tr>
        <td>${contact.name}</td>
        <td>${contact.email}</td>
        <td>${contact.phone}</td>
        <td>
          <i class="fa fa-trash" style="color: red;" onclick="deleteContact('${contact._id}')"></i> | 
          <i class="fa fa-edit" style="color: green;" onclick='updateContact("${contact._id}")'></i></td>
    </tr>
`;
  }
};

async function deleteContact(id) {
  await axios.delete("/deleteContact/" + id);
  window.location.reload();
}

async function updateContact(id) {
  const contact = window.contacts.find(c => c._id === id);
  $("#modal-default").modal();
  const email = document.getElementById("exampleInputEmail1");
  const name = document.getElementById("exampleInputName1");
  const phone = document.getElementById("exampleInputPhone1");

  email.value = contact.email;
  name.value = contact.name;
  phone.value = contact.phone;

  window.contact = {
    id,
    email: email.value,
    name: name.value,
    phone: phone.value
  };
}

async function update() {
  await axios.put("/updateContact/" + window.contact.id, {
    name: window.contact.name,
    phone: window.contact.phone,
    email: window.contact.email
  });
  window.location.reload();
}

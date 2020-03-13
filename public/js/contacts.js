window.onload = async function() {
  const contacts = await axios.get("/getContacts");
  const tbody = document.getElementById("table");
  for (const contact of contacts.data) {
    tbody.innerHTML += `
    <tr>
        <td>${contact.name}</td>
        <td>${contact.email}</td>
        <td>${contact.phone}</td>
        <td>
          <i class="fa fa-trash" style="color: red;" onclick="deleteContact('${contact._id}')"></i> | 
          <i class="fa fa-edit" style="color: green; onclick="updateContact('${contact._id}')"></i></td>
    </tr>
`;
  }
};

async function deleteContact(id) {
  await axios.delete("/deleteContact/" + id);
  window.location.reload();
}

function updateContact(id) {
  console.log(id);
}

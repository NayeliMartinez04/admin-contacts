window.onload = async function() {
  const contacts = await axios.get("/getContacts");
  const tbody = document.getElementById("table");
  for (const contact of contacts.data) {
    tbody.innerHTML += `
    <tr>
        <td>${contact.name}</td>
        <td>${contact.email}</td>
        <td>${contact.phone}</td>
    </tr>
`;
  }
};

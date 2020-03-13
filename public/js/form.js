const email = document.getElementById("exampleInputEmail1");
const name = document.getElementById("exampleInputName1");
const phone = document.getElementById("exampleInputPhone1");
const btnSave = document.getElementById("btnSave");

btnSave.onclick = async function() {
  if (!email.value) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }

  if (!name.value) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }

  if (!phone.value) {
    phone.classList.add("is-invalid");
  } else {
    phone.classList.remove("is-invalid");
  }

  if (!name.value || !email.value || !phone.value) {
    return;
  }

  await axios.post("/createContact", {
    name: name.value,
    email: email.value,
    phone: phone.value
  });

  // window.location.href = "/contacts";
};

const form = document.querySelector("#form");
const inputEmail = document.querySelector("#email");

function handleSubmit(e) {
  e.preventDefault();
}

function validateInput(input) {
  if (input.validity.valid) {
  }
}

function resetForm(form) {
  form.reset();
}

form.addEventListener("submit", function (e) {
  handleSubmit(e);

  if (inputEmail.validity.valid) {
    resetForm(form);
  }
});

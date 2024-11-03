const form = document.querySelector("#form");
const inputEmail = document.querySelector("#email");

function handleSubmit(event) {
  event.preventDefault();
}

function inputValid(input) {
  input.classList.add("outline-paleblue");
  input.classList.remove("outline-red");
  input.setAttribute("aria-invalid", "false");
  input.nextElementSibling.classList.add("invisible");
  input.nextElementSibling.classList.remove("visible");
  input.nextElementSibling.textContent = "";
}

function inputInvalid(input, message) {
  input.classList.add("outline-red");
  input.classList.remove("outline-paleblue");
  input.setAttribute("aria-invalid", "true");
  input.nextElementSibling.classList.add("visible");
  input.nextElementSibling.classList.remove("invisible");
  input.nextElementSibling.textContent = message;
}

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const validateEmail = emailRegex.test(email.value);

  if (validateEmail) {
    inputValid(email);
    form.reset();
  } else {
    inputInvalid(email, "Please enter a valid email address");
  }
}

form.addEventListener("submit", function (event) {
  handleSubmit(event);
  validateEmail(inputEmail);
});

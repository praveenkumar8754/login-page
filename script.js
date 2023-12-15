"use strict";

// Selecting Elements
const form = document.querySelector("form");
const firstNameField = form.querySelector(".first-name-field");
const firstNameInput = firstNameField.querySelector(".first-name");

const lastNameField = form.querySelector(".last-name-field");
const lastNameInput = lastNameField.querySelector(".last-name");

const emailField = form.querySelector(".email-field");
const emailInput = emailField.querySelector(".email");

const passField = form.querySelector(".create-password");
const passInput = passField.querySelector(".Password");

const cpassField = form.querySelector(".confirm-password");
const cpassInput = cpassField.querySelector(".cPassword");

// Hide and Show Password
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    // Get The Parent El
    const inputField = eyeIcon.parentElement.querySelector("input");
    inputField.type = inputField.type === "password" ? "text" : "password";
    eyeIcon.classList.toggle("bx-hide");
    eyeIcon.classList.toggle("bx-show");
  });
});

// Email Validation
function checkEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const isValidEmail = emailInput.value.match(emailPattern);
  emailField.classList.toggle("invalid", !isValidEmail);
}

// Password Validation
function validatePassword(input, pattern) {
  const isValidPassword = input.value.match(pattern);
  input.parentElement.classList.toggle("invalid", !isValidPassword);
}

// Create Password Validation
function createPassword() {
  const passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  validatePassword(passInput, passPattern);
}

// Confirm Password Validation
function confirmPassword() {
  const isValidConfirmation =
    passInput.value === cpassInput.value && cpassInput.value !== "";
  cpassField.classList.toggle("invalid", !isValidConfirmation);
}

// Event Listeners for Keyup
emailInput.addEventListener("keyup", checkEmail);
passInput.addEventListener("keyup", createPassword);
cpassInput.addEventListener("keyup", confirmPassword);

// Form Submit Event
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Preventing Form Submitting

  checkEmail();
  createPassword();
  confirmPassword();

  const isFormValid =
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !cpassField.classList.contains("invalid");

  if (isFormValid) {
    location.href = form.getAttribute("action");
  }
});

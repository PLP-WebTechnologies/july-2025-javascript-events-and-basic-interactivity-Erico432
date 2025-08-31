// ===============================
// Part 1: Event Handling
// ===============================
const msgBtn = document.getElementById("msgBtn");
const msgOutput = document.getElementById("msgOutput");

msgBtn.addEventListener("click", () => {
  msgOutput.textContent = "🎉 You clicked the button!";
});

// ===============================
// Part 2: Interactive Elements
// ===============================

// Dark/Light Mode Toggle
const toggleMode = document.getElementById("toggleMode");
toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");

increaseBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});

// FAQ Toggle
const faq = document.querySelector(".faq");
const faqQuestion = faq.querySelector(".faq-question");

faqQuestion.addEventListener("click", () => {
  faq.classList.toggle("open");
});

// ===============================
// Part 3: Form Validation
// ===============================
const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formSuccess = document.getElementById("formSuccess");

// Helper function to validate email
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop page reload
  let isValid = true;

  // Validate Name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate Email
  if (!isValidEmail(emailInput.value)) {
    emailError.textContent = "Enter a valid email.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate Password
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // Success Message
  if (isValid) {
    formSuccess.textContent = "✅ Form submitted successfully!";
    form.reset();
  } else {
    formSuccess.textContent = "";
  }
});

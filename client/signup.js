function validateSignUpForm(event) {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  let isValid = true;

  // Name
  if (!name.value.trim()) {
    nameError.textContent = "Name is required";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email
  if (!email.value.trim()) {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    emailError.textContent = "Enter a valid email";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Password
  if (!password.value.trim()) {
    passwordError.textContent = "Password is required";
    isValid = false;
  } else if (password.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // Confirm Password
  if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = "Passwords do not match";
    isValid = false;
  } else {
    confirmPasswordError.textContent = "";
  }

  if (isValid) {
    alert("Sign Up Successful!");
    // Here you can send data to backend or redirect
  }

  return false;
}

let hcaptchaVerified = false;

// Callback function for hCaptcha
function onVerify() {
  hcaptchaVerified = true;
}

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  if (!hcaptchaVerified) {
    e.preventDefault(); // Prevent the default form submission if hCaptcha is not verified
    const errorMessage = document.createElement("div");
    errorMessage.textContent =
      "hCaptcha not verified. Please complete the captcha.";
    errorMessage.style.color = "red";
    document.body.appendChild(errorMessage);
  } else {
    // Allow the form to be submitted
    // Use a timeout to clear the form fields after submission
    setTimeout(() => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    }, 1000); // Adjust the timeout as needed
  }
});

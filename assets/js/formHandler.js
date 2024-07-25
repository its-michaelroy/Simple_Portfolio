let hcaptchaVerified = false;

// Callback function for hCaptcha
function onVerify() {
  hcaptchaVerified = true;
}

// Prevent form submission if hCaptcha is not verified
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission
  if (hcaptchaVerified) {
    const email = document.getElementById("email").value;
    document.getElementById("subject").value = `New submission from ${email}`;

    // Use fetch to submit the form data
    fetch(this.action, {
      method: "POST",
      body: new FormData(this),
    })
      .then((response) => {
        if (response.ok) {
          clearFormFields(); // Clear fields on successful submission
          alert("Your message has been sent!");
        } else {
          alert("There was a problem with your submission.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was a problem with your submission.");
      });
  } else {
    alert("Please complete the hCaptcha challenge."); // Alert if hCaptcha is not verified
  }
});

// Function to clear form fields
function clearFormFields() {
  document.getElementById("name").value = "Name";
  document.getElementById("email").value = "Email";
  document.getElementById("message").value = "Message";
}

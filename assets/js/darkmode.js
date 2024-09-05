document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");

  themeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    toggleThemeIcon();
  });

  function toggleThemeIcon() {
    if (body.classList.contains("dark-mode")) {
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
  }

  toggleThemeIcon(); // Set initial icon based on the current theme
});

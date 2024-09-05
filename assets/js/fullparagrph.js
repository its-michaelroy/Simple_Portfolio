function toggleParagraph() {
  var spans = document.querySelectorAll("#more");
  var btnText = document.querySelector(".learn-more");

  spans.forEach(function (span) {
    span.classList.toggle("hidden");
  });

  if (spans[0].classList.contains("hidden")) {
    btnText.textContent = "Learn More";
  } else {
    btnText.textContent = "Less";
  }
}

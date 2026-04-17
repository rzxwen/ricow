const buttons = document.querySelectorAll(".main-button, .secondary-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.style.transform = "scale(0.98)";
    setTimeout(() => {
      button.style.transform = "";
    }, 120);
  });
});
const buttons = document.querySelectorAll(".scroll-down-button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);

    // Scroll to the target section
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

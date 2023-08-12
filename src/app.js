const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");
const frame = document.querySelector(".frame ");

function toggleButton() {
  navList.classList.toggle("show");
  frame.classList.toggle("frame-hide");
}

hamburgerButton.addEventListener("click", toggleButton);

const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");
const frame = document.querySelector(".frame ");

function toggleButton() {
  navList.classList.toggle("show");
  frame.classList.toggle("frame-hide");
}

hamburgerButton.addEventListener("click", toggleButton);

//
const subSection = document.querySelector(".sub-section");
//

subSection.addEventListener("mouseover", () => {
  subSection.style.background = "grey"; // remove later
  //
  const education = document.getElementById("education");
  education.classList.toggle("education-show");
  education.classList.remove("about-button");
});
// --- //

subSection.addEventListener("mouseout", () => {
  subSection.style.background = "tomato"; // remove later
  //
  const education = document.getElementById("education");
  education.classList.toggle("education-show");
  education.classList.remove("about-button");
});

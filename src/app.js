const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");
// const frame = document.querySelector(".frame ");

function toggleButton() {
  navList.classList.toggle("show");
  // frame.classList.toggle("frame-hide");
}

hamburgerButton.addEventListener("click", toggleButton);

// subsection
// const subSection = document.querySelector(".sub-section");
//
// Education
// const education = document.getElementById("education");
//
// skills
// const skills = document.getElementById("skills");
//
// const infoDisplay = function () {
//   const education = document.getElementById("education");
//   education.classList.toggle("education-show");
//   education.classList.toggle("about-button");
//   //
//   const skills = document.getElementById("skills");
//   skills.classList.toggle("skills-show");
//   skills.classList.toggle("about-button");
// };

// subSection.addEventListener("mouseover", infoDisplay);
// // //
// subSection.addEventListener("mouseout", infoDisplay);

const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");
const frame = document.querySelector(".frame ");

function toggleButton() {
  navList.classList.toggle("show");
  frame.classList.toggle("frame-hide");
}

hamburgerButton.addEventListener("click", toggleButton);

//
//
//
window.onload = function () {
  console.log("Holax");
};
//

var scrollTop =
  window.pageYOffset !== undefined
    ? window.pageYOffset
    : (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
//
var scrollLeft =
  window.pageXOffset !== undefined
    ? window.pageXOffset
    : (document.documentElement || document.body.parentNode || document.body)
        .scrollLeft;

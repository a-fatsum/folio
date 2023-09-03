const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("hide");
});

// contact form

// const form = document.getElementById("form");

// function sendEmail() {
//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "mustafaabdelati@gmail.com",
//     Password: "CuSO45H2O",
//     To: "mustafaabdelati@gmail.com",
//     From: document.getElementById("email").value,
//     Subject: "New enquiry",
//     Body: "And this is the body",
//   }).then((message) => alert(message));
// }

// form.addEventListener("submit", sendEmail);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document
        .querySelectorAll(".project-card")[0]
        .classList.add("fade-in-right");
      document
        .querySelectorAll(".project-card")[1]
        .classList.add("fade-in-left");
      document
        .querySelectorAll(".project-card")[2]
        .classList.add("fade-in-right");
    } else {
      document
        .querySelectorAll(".project-card")[0]
        .classList.remove("fade-in-right");
      document
        .querySelectorAll(".project-card")[1]
        .classList.remove("fade-in-left");
      document
        .querySelectorAll(".project-card")[2]
        .classList.remove("fade-in-right");
    }
  });
});

observer.observe(document.querySelector(".sub-section-alternative"));
// observer.observe(document.querySelector(".project-card-right"));
// observer.observe(document.querySelector(".project-card-left"));

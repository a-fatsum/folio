import { createIcons, icons } from "https://cdn.skypack.dev/lucide";
createIcons({ icons });

async function getMelbourneWeather() {
  const apiKey = "b54773a7feb646ecad805837250310"; // <-- replace with your real key
  const city = "Melbourne";
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Extract needed weather info
    const loc = data.location;
    const cur = data.current;
    const description = cur.condition.text;
    const tempC = cur.temp_c;
    // const feelsLike = cur.feelslike_c;
    const humidity = cur.humidity;
    const windKph = cur.wind_kph;
    const localTime = loc.localtime;

    // Inject weather info with Lucide icons
    document.getElementById("weather-widget").innerHTML = `
      <p class="text-[14px] mt-1"><strong>${loc.name}</strong></p>
      <p class="text-[12px] mt-1">${description}</p>
      <p class="flex gap-1 text-[12px] mt-1">
        <i data-lucide="thermometer"></i> ${tempC}°C
      </p>
      <p class="flex gap-1 text-[12px] mt-1">
        <i data-lucide="droplet"></i> ${humidity}%
      </p>
      <p class="flex gap-1 text-[12px] mt-1">
        <i data-lucide="wind"></i> ${windKph} kph
      </p>
       <p class="flex gap-1 text-[12px] mt-1">
        <i data-lucide="clock"></i> ${localTime}
      </p>
    `;

    // Re-render icons after updating DOM
    createIcons({ icons });
  } catch (error) {
    console.error("Error fetching weather data:", error);
    document.getElementById("weather-widget").textContent =
      "Could not fetch weather.";
  }
}

// Call it right away:
getMelbourneWeather();

/// ====================================== 3 dots nav
const sections = document.querySelectorAll("section");
const dots = document.querySelectorAll(".dot");

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5, // 50% of section visible triggers the dot
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const targetDot = document.querySelector(
      `.dot[data-target='${entry.target.id}']`
    );
    if (entry.isIntersecting) {
      targetDot.classList.add("bg-red-400", "scale-150");
      targetDot.classList.remove("bg-gray-400", "scale-100");
    } else {
      targetDot.classList.remove("bg-red-400", "scale-150");
      targetDot.classList.add("bg-gray-400", "scale-100");
    }
  });
}, observerOptions);

sections.forEach((section) => observer.observe(section));

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const section = document.getElementById(dot.dataset.target);
    section.scrollIntoView({ behavior: "smooth" });
  });
});

//===================================== Projects Modal
// modalOverlay is for closing the modal when clicking outside of the modal box

(function () {
  const modalOverlay = document.getElementById("modal-overlay");
  const modalTitle = document.getElementById("modal-title");

  const modalDesc = document.getElementById("modal-desc");
  const modalImage = document.getElementById("modal-image");
  const modalLive = document.getElementById("modal-live");
  const modalRepo = document.getElementById("modal-repo");
  const closeBtn = document.getElementById("modal-close");

  function openModal(btn) {
    modalTitle.textContent = btn.dataset.title || "Project";
    modalDesc.textContent = btn.dataset.desc || "";
    modalImage.src = btn.dataset.image || "";
    modalLive.href = btn.dataset.live || "#";
    modalRepo.href = btn.dataset.repo || "#";

    modalOverlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalOverlay.classList.add("hidden");
    document.body.style.overflow = "";
  }

  document.querySelectorAll("button[data-title]").forEach((btn) => {
    btn.addEventListener("click", () => openModal(btn));
  });

  closeBtn.addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", closeModal);
  // Clicking modal content should NOT close, stopPropagation() is necessary here
  modalOverlay
    .querySelector(".Modal-box")
    .addEventListener("click", (e) => e.stopPropagation());

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modalOverlay.classList.contains("hidden")) {
      closeModal();
    }
  });
})();

//
document.querySelectorAll(" video").forEach((video) => {
  video.pause(); // keep paused initially
  video.closest(".group").addEventListener("mouseenter", () => video.play());
  video.closest(".group").addEventListener("mouseleave", () => video.pause());
});

//
const pmtArrgVideoElement = document.getElementById("pmt_arrg_app");
const onclickWebdesignsWebsiteVideoElement = document.getElementById(
  "onclick_webdesigns_website"
);

pmtArrgVideoElement.playbackRate = 1.2; // <---------------------------------------------------- Adjust the video playback speed
onclickWebdesignsWebsiteVideoElement.playbackRate = 1.5;
onclickWebdesignsWebsiteVideoElement.currentTime = 2;

//===================================== Contact Form Submission

// Contact Form KEY
// a3f1fc77-6dcb-4e9f-861e-69e7c3c88306

const form = document.getElementById("contact-form");
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  formData.append("access_key", "a3f1fc77-6dcb-4e9f-861e-69e7c3c88306");

  const originalText = submitBtn.textContent;

  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      alert("Success! I will get back to you within 24 hours.");
      form.reset();
    } else {
      alert("Error: " + data.message);
    }
  } catch (error) {
    alert("Something went wrong. Please try again.");
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
});

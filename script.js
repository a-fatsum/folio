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

//
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

//
(function () {
  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const modalImage = document.getElementById("modal-image");
  const modalLive = document.getElementById("modal-live");
  const modalRepo = document.getElementById("modal-repo");
  const closeBtn = document.getElementById("modal-close");

  function openModal(btn) {
    modalTitle.textContent = btn.dataset.title || "Project";
    modalDesc.textContent = btn.dataset.desc || "";
    modalImage.src =
      btn.dataset.image ||
      "https://via.placeholder.com/800x500.png?text=Preview";
    modalLive.href = btn.dataset.live || "#";
    modalRepo.href = btn.dataset.repo || "#";
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
  }

  document.querySelectorAll("button[data-title]").forEach((btn) => {
    btn.addEventListener("click", () => openModal(btn));
  });

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
  });
})();

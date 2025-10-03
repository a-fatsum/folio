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

// Fetch weather data based on user input location
async function fetchData() {
  const api_key = "2BMTTMMRPH3GUDVK5FQZSBJ5H";
  let inputLoc = document.querySelector("input").value; // Use .value instead of .innerHTML to get input value

  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputLoc}?unitGroup=metric&key=${api_key}&contentType=json`
    );
    const data = await response.json(); // Process your data here
    let parentCon = document.querySelector(".details");
    parentCon.innerHTML = ""; // Clear previous results

    let locationTitle = document.createElement("p");
    locationTitle.innerHTML = `Weather for: ${data.resolvedAddress}`;
    parentCon.appendChild(locationTitle);

    data.days.forEach((day) => {
      let dayDiv = document.createElement("div");
      dayDiv.classList.add("day");

      let date = document.createElement("p");
      date.innerHTML = `Date: ${day.datetime}`;
      dayDiv.appendChild(date);

      let temp = document.createElement("p");
      temp.innerHTML = `Temperature: ${day.temp}°C`;
      dayDiv.appendChild(temp);

      let conditions = document.createElement("p");
      conditions.innerHTML = `Conditions: ${day.conditions}`;
      dayDiv.appendChild(conditions);

      // Append the day div to the parent container
      parentCon.appendChild(dayDiv);
    });
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

let customLocation = document
  .querySelector("#searchIcon")
  .addEventListener("click", fetchData); // Correct 'click' event listener

// Function to fetch weather data based on geolocation
async function getData(lat, long) {
  const api_key = "2BMTTMMRPH3GUDVK5FQZSBJ5H";
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${long}?unitGroup=metric&key=${api_key}&contentType=json`
  );
  return await response.json();
}

// Function to handle successful geolocation fetching
async function getLocation(position) {
  const data = await getData(
    position.coords.latitude,
    position.coords.longitude
  );

  let parentCon = document.querySelector(".container");
  parentCon.innerHTML = ""; // Clear previous results

  let locationTitle = document.createElement("p");
  locationTitle.innerHTML = `Weather for: ${data.resolvedAddress}`;
  parentCon.appendChild(locationTitle);

  data.days.forEach((day) => {
    let dayDiv = document.createElement("div");
    dayDiv.classList.add("day");

    let date = document.createElement("p");
    date.innerHTML = `Date: ${day.datetime}`;
    dayDiv.appendChild(date);

    let temp = document.createElement("p");
    temp.innerHTML = `Temperature: ${day.temp}°C`;
    dayDiv.appendChild(temp);

    let conditions = document.createElement("p");
    conditions.innerHTML = `Conditions: ${day.conditions}`;
    dayDiv.appendChild(conditions);

    parentCon.appendChild(dayDiv);
  });
}

// Function to handle geolocation fetching failure
let failedToGet = () => {
  console.log("Failed to get location");
};

// Event listener for geolocation button click
let currentLocation = document.querySelector(".currentLocation");
currentLocation.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(getLocation, failedToGet);
});

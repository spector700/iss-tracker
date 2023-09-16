// Changes the class of the sidbar buttons to active if clicked
$(".sidebar ul li").on("click", function () {
  $(".sidebar ul li.active").removeClass("active");
  $(this).addClass("active");
});


// Define the icon params
var ISSIcon = L.icon({
  iconUrl: '/static/International_Space_Station.svg.png',
  iconSize: [100, 100],
  iconAnchor: [25, 15],
  popupAnchor: [50, 25],
});

// Define the map outside the moveISS function and initialize it once
var map = L.map("map",{
  scrollWheelZoom: false
}).setView([0, 0], 4);
var iss = L.marker([0, 0], {icon: ISSIcon}).addTo(map);

// Initialize the tiles of the map
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);


function moveISS() {
  $.getJSON(
    "http://api.open-notify.org/iss-now.json?callback=?",
    function (data) {
      var lat = data["iss_position"]["latitude"];
      var lon = data["iss_position"]["longitude"];

      // Update the map
      map.setView([lat, lon]);

      // Update the icon 
      iss.setLatLng([lat, lon]);
      map.panTo([lat, lon], (animate = true));
    }
  );
  // Update every 3 sec
  setTimeout(moveISS, 3000);
}

// Call the function
moveISS();
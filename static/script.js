$(".sidebar ul li").on("click", function () {
  $(".sidebar ul li.active").removeClass("active");
  $(this).addClass("active");
});

// Define the map outside the moveISS function and initialize it once
var map = L.map("map").setView([0, 0], 4);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Call the function
moveISS();

function moveISS() {
  $.getJSON(
    "http://api.open-notify.org/iss-now.json?callback=?",
    function (data) {
      var lat = data["iss_position"]["latitude"];
      var lon = data["iss_position"]["longitude"];

      // Update the map
      map.setView([lat, lon]);

      // The update to the map is done here:
      // iss.setLatLng([lat, lon]);
      // isscirc.setLatLng([lat, lon]);
      // map.panTo([lat, lon], (animate = true));
    }
  );
  // Update every 3 sec
  setTimeout(moveISS, 3000);
}

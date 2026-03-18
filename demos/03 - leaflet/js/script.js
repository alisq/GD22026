//leaflet
//map libre
//add custom marker
//add custom popup


var map = L.map('map').setView([43.6530098,-79.3913045], 17);

L.maplibreGL({
  style: 'https://alisq.github.io/GD22026/demos/03%20-%20leaflet/js/style.json',
  maplibreGL: maplibregl
}).addTo(map);

  // Optional Leaflet marker on top
    L.marker([43.6532, -79.3832])
      .addTo(map)
      .bindPopup('Toronto');
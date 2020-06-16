<script>

  const dataUrl = 'https://docs.google.com/spreadsheets/u/1/d/1l7N6m9OXFYLSTAw4jCWFdaybNxPLz1yFSmmV9538x98/export?format=csv&id=1l7N6m9OXFYLSTAw4jCWFdaybNxPLz1yFSmmV9538x98&gid=0'

  var map = L.map('map', {
    center: [-33.1252, -64.3431],
    zoom: 12,
    scrollWheelZoom: true
  })

    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
  }).addTo(map);

  L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
  });

      var customLayer = L.geoJson(null, {
  onEachFeature: function(feature, layer) {
      layer.bindPopup(feature.properties.Institucion);
      }
  });

  var runLayer = omnivore.csv(dataUrl, null, customLayer)
      .on('ready', function() {
          // http://leafletjs.com/reference.html#map-fitbounds
          map.fitBounds(runLayer.getBounds());
      })
      .addTo(map);

</script>

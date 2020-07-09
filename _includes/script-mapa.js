<script>

  const dataUrl = 'georef/ecovecinos.csv'

  var map = L.map('map', {
    center: [-33.1088, -64.3337],
    zoom: 12,
    scrollWheelZoom: true
  })

    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
  }).addTo(map)

  L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
  })

const createPopup = (feature, ignoreKeys = ['icon', 'color']) => {
    let text = ''
    let properties = feature.properties

    Object.keys(properties).forEach(key => {
      if (properties[key] && !ignoreKeys.includes(key)) {
        text += `<strong>${key}:</strong> ${properties[key]}<br>`
      }
    })
    return text
  }

var customLayer = L.geoJson(null, {
onEachFeature: function(feature, layer) {
      layer.bindPopup(createPopup(feature, ['icon', 'color']))
      //layer.bindPopup(feature.properties.EcoVecino);
      }
  })

var runLayer = omnivore.csv(dataUrl, null, customLayer)
  .on('ready', function() {
   map.fitBounds(runLayer.getBounds());
  })
.addTo(map)

</script>

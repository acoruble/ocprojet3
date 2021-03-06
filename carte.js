jQuery(document).ready(function() {
  console.log("jQuery est prêt !");
});

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: new google.maps.LatLng(45.763773, 4.8454991),
    mapTypeId: 'terrain'
  });
  $.ajax({
    url: 'https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=978ca551b43dc6408bf48568dbc1f47392eba830',
    type: 'GET',
    dataType: 'text',
    success: function retour(results) {
      console.log("ça marche !");
      var listeMarqueurs =[];
      JSON.parse(results).forEach(function(station) {
        var marker = new google.maps.Marker({
          position: station.position,
          map: map,
        });
        listeMarqueurs.push(marker);
      });
      var markerCluster = new MarkerClusterer(map, listeMarqueurs, {
        imagePath: 'marqueurs/m'
      });
    },
  });
}

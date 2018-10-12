var voyage = L.polyline([protectorate_siege,protectorate_ignatz,protectorate_ferropolis,protectorate_justitian], {color: 'red', opacity: 0.60, pmIgnore: true});
var voyage_animate_marker = L.Marker.movingMarker([protectorate_siege,protectorate_ignatz,protectorate_ferropolis,protectorate_justitian],10000,{autostart: true, loop: true, pmIgnore: true});
voyage_animate_marker.addStation(1, 5000);
voyage_animate_marker.addStation(2, 5000);

voyage_animate_marker.setIcon(L.icon({iconUrl: 'img/players_GROUP.png',iconSize: [38, 38],}))

voyage_animate_marker.on('end', function() {
    voyage_animate_marker.bindPopup('<b>Hop on déclenche un event END !</b>', {closeOnClick: false})
    .openPopup();
});

var voyage_layer = L.layerGroup([voyage,voyage_animate_marker]);
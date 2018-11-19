var trajet = new Array(
	protectorate_siege,
	protectorate_ignatz,
	protectorate_ferropolis,
	protectorate_justitian
);

var voyage = L.polyline(trajet, {color: 'red', opacity: 0.60, pmIgnore: true});

var voyage_animate_marker = L.Marker.movingMarker(trajet,20000,{autostart: true, loop: false, pmIgnore: true});

voyage_animate_marker.addStation(1, 2000);
voyage_animate_marker.addStation(2, 2000);

voyage_animate_marker.setIcon(L.icon({iconUrl: 'img/players_GROUP.png',iconSize: [38, 38],}))

voyage_animate_marker.on('end', function() {
    voyage_animate_marker.bindPopup('<b>Hop on déclenche un event END !</b>', {closeOnClick: false})
    .openPopup();
});

var voyage_layer = L.layerGroup([voyage,voyage_animate_marker]);

function newFunction() {
	plop = 2;
}

var voyage = L.polyline([protectorate_siege,protectorate_ignatz,protectorate_ferropolis,protectorate_justitian], {color: 'red'});
var voyage_animate = L.Marker.movingMarker([protectorate_siege,protectorate_ignatz,protectorate_ferropolis,protectorate_justitian],[20000],{autostart: true, loop: true});

var voyage_layer = L.layerGroup([voyage,voyage_animate]);
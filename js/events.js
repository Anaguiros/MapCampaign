var data = [
	[protectorate_justitian.lat, protectorate_justitian.lng, 0.1], 
	[protectorate_spital.lat, protectorate_spital.lng, 0.2], 
	[protectorate_ignatz.lat, protectorate_ignatz.lng, 0.5], 
	[protectorate_ferropolis.lat, protectorate_ferropolis.lng, 0.8], 
];

var events_heatmap = new L.heatLayer(data, {max: 1});

var events_layer = L.layerGroup([events_heatmap]);
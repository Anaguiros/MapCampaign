var events_heatmap = new L.TileLayer.HeatCanvas({},{
	'step':0.5, 
	'degree':HeatCanvas.LINEAR, 
	'opacity':0.7
});

var data = [
	[protectorate_justitian.lat, protectorate_justitian.lng, 103], 
	[protectorate_spital.lat, protectorate_spital.lng, 86], 
	[protectorate_ignatz.lat, protectorate_ignatz.lng, 41], 
	[protectorate_ferropolis.lat, protectorate_ferropolis.lon, 40], 
];
for(var i=0,l=data.length; i<l; i++) {
	events_heatmap.pushData(data[i][0], data[i][1], data[i][2]);
	// if(data[i][2]> 20) {
		// var marker = new L.Marker(new L.LatLng(data[i][0], data[i][1]));
		// marker.bindPopup(data[i].toString());
		// markerLayers.addLayer(marker);
	// }
}

events_heatmap.onRenderingStart(function(){
	document.getElementById("status").innerHTML = 'rendering';
});
events_heatmap.onRenderingEnd(function(){
	document.getElementById("status").innerHTML = '';
});

var events_layer = L.layerGroup([events_heatmap]);
// ########## INIT MAP ##########

//Creates the map, tells it to display in the element with id of 'mapid' and sets a flat projection, as we are projecting an image. 
var map = L.map('mapid', { 
    crs: L.CRS.Simple, //Set a flat projection, as we are projecting an image
});


// ########## INIT MAP LAYERS ##########

//Creates the switchable map layers. Change the URL to reflect where you are hosting your map tiles. Width and Height of original image MUST be defined.
var protectorate = L.tileLayer.zoomify('./PROTECTORATE/{g}/{z}-{x}-{y}.jpg', {
    width: 1600, 
    height: 1138, 
    tolerance: 0.9,
	layers: [players_protectorate, pnjs_protectorate],
    attribution: 'Map by SixMoreVodka'    // Change this value to whatever you like.
    });

var worldmap = L.tileLayer.zoomify('./WORLDMAP/{g}/{z}-{x}-{y}.jpg', {
    width: 1138, 
    height: 1600, 
    tolerance: 0.9, 
    attribution: 'Map by SixMoreVodka'    // Change this value to whatever you like.
    });
	
protectorate.addTo(map);
	
//Setting the view to our layer bounds, set by our Zoomify plugin
map.fitBounds(protectorate.getBounds());

// Creates baseMaps layer and passes which maps to include in the layers control.
var baseMaps = {
    "protectorat": protectorate,
    "Carte du Monde": worldmap,
};

// ########## INIT LAYERS MARKERS ##########

// Creates overlayMaps layer and passes which marker groups to include in the layers control.
var overlayMaps = {
    "Players Protectorat": players_protectorate,
	"PNJS Protectorat": pnjs_protectorate,
	"Voyage": voyage_layer,
};

players_protectorate.addTo(map)

// ########## UTIL ##########

// Creates a switchable layers control from baseMaps and overlayMaps and adds them to map.
L.control.layers(baseMaps, overlayMaps).addTo(map);
L.control.mousePosition().addTo(map);
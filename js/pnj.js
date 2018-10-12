// Create the icon used for the player markers. May be changed to any image you wish.
var playerIcon = L.icon({
    iconUrl: '../img/players.png',
    iconSize: [38, 38],
});

// Create the player popup content. You can change these to include player bios, army lists, etc for each individual player. Accepts HTML content such as images and links.
var redPNJPopup = "<div><b>name :</b> Robert</br><b>description :</b> Super PNJ qui va finir la campagne vivant</div>";

// Creates the player markers, sets the latitude and longitude. Passes options for custom icon and custom popup values.
var redPNJ_protectorate = L.marker(protectorate_justitian, {icon: L.icon({iconUrl: '../img/players_RED.png',iconSize: [38, 38],}), pmIgnore: true}).bindPopup(redPNJPopup);

// Creates a group of player markers to be added to layer control later. Adds player markers to map.
var pnjs_protectorate = L.layerGroup([redPNJ_protectorate]);
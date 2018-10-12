// Create the icon used for the player markers. May be changed to any image you wish.
var playerIcon = L.icon({
    iconUrl: '../img/players.png',
    iconSize: [38, 38],
});

// Create the player popup content. You can change these to include player bios, army lists, etc for each individual player. Accepts HTML content such as images and links.
var redPlayerPopup = "<div><b>name :</b> TOTO</br><b>description :</b> blablabla</div>";
var yellowPlayerPopup = "<div><b>name :</b> TITI</br><b>description :</b> blablabla</div>";
var bluePlayerPopup = "<div><b>name :</b> TUTU</br><b>description :</b> blablabla</div>";
var orangePlayerPopup = "<div><b>name :</b> TETE</br><b>description :</b> blablabla</div>";
var greenPlayerPopup = "<div><b>name :</b> TATA</br><b>description :</b> blablabla</div>";
var blackPlayerPopup = "<div><b>name :</b> TYTY</br><b>description :</b> blablabla</div>";

// Creates the player markers, sets the latitude and longitude. Passes options for custom icon and custom popup values.
var redPlayer_protectorate = L.marker(protectorate_justitian, {icon: L.icon({iconUrl: '../img/players_RED.png',iconSize: [38, 38],}), pmIgnore: true}).bindPopup(redPlayerPopup);
var yellowPlayer_protectorate = L.marker(protectorate_spital, {icon: L.icon({iconUrl: '../img/players_YELLOW.png',iconSize: [38, 38],}), pmIgnore: true}).bindPopup(yellowPlayerPopup);
var bluePlayer_protectorate = L.marker(protectorate_sinder, {icon: L.icon({iconUrl: '../img/players_BLUE.png',iconSize: [38, 38],}), pmIgnore: true}).bindPopup(bluePlayerPopup);
var orangePlayer_protectorate = L.marker(protectorate_ignatz, {icon: L.icon({iconUrl: '../img/players_ORANGE.png',iconSize: [38, 38],}), pmIgnore: true}).bindPopup(orangePlayerPopup);
var greenPlayer_protectorate = L.marker(protectorate_siege, {icon: L.icon({iconUrl: '../img/players_GREEN.png',iconSize: [38, 38],}), pmIgnore: true}).bindPopup(greenPlayerPopup);
var blackPlayer_protectorate = L.marker(protectorate_ferropolis, {icon: L.icon({iconUrl: '../img/players_BLACK.png',iconSize: [38, 38],}), pmIgnore: true}).bindPopup(blackPlayerPopup);

// Creates a group of player markers to be added to layer control later. Adds player markers to map.
var players_protectorate = L.layerGroup([redPlayer_protectorate, yellowPlayer_protectorate, bluePlayer_protectorate, orangePlayer_protectorate, greenPlayer_protectorate, blackPlayer_protectorate]);
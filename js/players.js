// Create the icon used for the player markers. May be changed to any image you wish.
var playerIcon = L.icon({
    iconUrl: 'img/players.png',
    iconSize: [38, 38],
});

// Create the player popup content. You can change these to include player bios, army lists, etc for each individual player. Accepts HTML content such as images and links.
var redPlayerPopup = 'TOTO';
var yellowPlayerPopup = 'TITI';
var bluePlayerPopup = 'TUTU';
var orangePlayerPopup = 'TETE';
var greenPlayerPopup = 'TATA';
var blackPlayerPopup = 'TYTY';

// Creates the player markers, sets the latitude and longitude. Passes options for custom icon and custom popup values.
var redPlayer_protectorate = L.marker(protectorate_justitian, {icon: L.icon({iconUrl: 'img/players_RED.png',iconSize: [38, 38],})}).bindPopup(redPlayerPopup);
var yellowPlayer_protectorate = L.marker(protectorate_spital, {icon: L.icon({iconUrl: 'img/players_YELLOW.png',iconSize: [38, 38],})}).bindPopup(yellowPlayerPopup);
var bluePlayer_protectorate = L.marker(protectorate_sinder, {icon: L.icon({iconUrl: 'img/players_BLUE.png',iconSize: [38, 38],})}).bindPopup(bluePlayerPopup);
var orangePlayer_protectorate = L.marker(protectorate_ignatz, {icon: L.icon({iconUrl: 'img/players_ORANGE.png',iconSize: [38, 38],})}).bindPopup(orangePlayerPopup);
var greenPlayer_protectorate = L.marker(protectorate_siege, {icon: L.icon({iconUrl: 'img/players_GREEN.png',iconSize: [38, 38],})}).bindPopup(greenPlayerPopup);
var blackPlayer_protectorate = L.marker(protectorate_ferropolis, {icon: L.icon({iconUrl: 'img/players_BLACK.png',iconSize: [38, 38],})}).bindPopup(blackPlayerPopup);

// Creates a group of player markers to be added to layer control later. Adds player markers to map.
var players_protectorate = L.layerGroup([redPlayer_protectorate, yellowPlayer_protectorate, bluePlayer_protectorate, orangePlayer_protectorate, greenPlayer_protectorate, blackPlayer_protectorate]);
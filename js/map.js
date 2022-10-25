let image = 'img/MAP1';
var width = 20000;
var height = 13000;
var maxLevel = 7;
var minLevel = 5;
var orgLevel = 7;

let tileWidth = 256 * Math.pow(2, orgLevel);
let radius = tileWidth / 2 / Math.PI;
let rx = width - tileWidth / 2;
let ry = -height + tileWidth / 2;

let west = -180;
let east = (180 / Math.PI) * (rx / radius);
let north = 85.05;
let south = (360 / Math.PI) * (Math.atan(Math.exp(ry / radius)) - (Math.PI / 4));
let rc = (tileWidth / 2 + ry) / 2;
let centerLat = (360 / Math.PI) * (Math.atan(Math.exp(rc / radius)) - (Math.PI / 4));
let centerLon = (west + east) / 2;
let bounds = [[south, west], [north, east]];

let map = new L.Map('map', {
  maxBounds: bounds,
});

L.tileLayer(image + '/{z}-{x}-{y}.jpg', {
  maxZoom: maxLevel, minZoom: minLevel, opacity: 1.0, zIndex: 1, noWrap: true,
  bounds: bounds
}).addTo(map);
      
let zoom = map.getBoundsZoom(bounds);
let center = new L.latLng(centerLat, centerLon);

map.setView([63.81,-47.89], zoom);










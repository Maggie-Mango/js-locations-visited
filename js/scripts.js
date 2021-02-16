//mock "database" with global variable constructor
function FavoritePlaces() {
  this.locations = {};
  this.currentId = 0;
}

//define another prototype method to increment this.currentId
FavoritePlaces.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

//takes a Location object as an argument
FavoritePlaces.prototype.addLocation = function(location) {
  location.id = this.assignId();
  this.locations[location.id] = location;
}

FavoritePlaces.prototype.findLocation = function(id) {
  if (this.locations[id] != undefined) {
    return this.locations[id];
  }
  return false;
}


//create location constructor
function Location(locationName, country, food, notes) {
  this.locationName = locationName;
  this.country = country;
  this.food = food;
  this.notes = notes;
}

//create prototype to call on Location objects
Location.prototype.fullName = function() {
  return this.locationName + ", " + this.country;
}

//ui logic
// create new favoritePlaces object. This is a global variable.

let favoritePlaces = new FavoritePlaces();

function displayLocationDetails(locationToDisplay) {
  let locationsList = $("ul#locations");
  let htmlForLocation = "";
  Object.keys(locationToDisplay.locations).forEach(function(key) {
    const location = locationToDisplay.findLocation(key);
    htmlForLocation += "<li id=" + location.id + ">" + location.locationName
  });
  locationsList.html(htmlForLocation);
}

$(document).ready(function() {
  $("form#new-location").submit(function(event) {
    event.preventDefault();
    const inputtedLocationName = $("input#new-location").val();
    const inputtedCountry = $("input#new-country").val();
    const inputtedFood = $("input#new-food").val();
    const inputtedNotes = $("input#new-note").val();
    let newLocation = new Location(inputtedLocationName, inputtedCountry, inputtedFood, inputtedNotes);
    favoritePlaces.addLocation(newLocation);
    displayLocationDetails(favoritePlaces);
  });
});
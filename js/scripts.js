//mock "database" with global variable
function FavoritePlaces() {
  this.locations = {};
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
//alert("JavaScript works!");
//Daniel Mackay
// SDI Project 3 1408

// Global Variables

var farmAnimals = [ 'Cows', 'Goats', 'Sheep', 'Dogs', 'Chickens'];
var numberVillagers = 200;
var monster1 = 'Cyclops';
var monster2 = 'Vampire';
var monster3 = 'Dragon';
var monster4 = 'Giant';
var confirm2 = confirm('Warn Villagers');

console.log('It is a fine sunny day, everyone is going about their business until they see a ' + monster4 + ' rustling the bushes' + '.');

// First function or Procedure

var warnVillage = function(argArray){
	if (confirm2 === true){
	console.log('The villagers sound the alarm and prepare for attack');
	} else ;{
	console.log('The ' + argArray + ' are under attack' + '.')
	}
};
warnVillage(farmAnimals);


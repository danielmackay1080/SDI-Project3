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

console.log('It is a fine sunny day, everyone is going about their business until they see a ' + monster4 + ' rustling the bushes' + '.');

// First function or Procedure

var warnVillage = function(argArray, confirm2){
	var confirm2 = confirm(' Warn the Villagers');
	if (confirm2 === true){
	console.log('The villagers sound the alarm and prepare for attack');
	} else ;{
	console.log('The ' + argArray + ' are under attack' + '.')
	}
};
warnVillage(farmAnimals);

// The first Function JSON Data For loop and Nested loop

console.log ('The alarm is sounded!');

var jsonFunction = function() {

	for (var firstKey in jsonData.theHeroes){
		for (var secondKey in jsonData.theHeroes[firstKey]){
			console.log(jsonData.theHeroes[firstKey][secondKey] + ' has arrived');
		}
	}
};
jsonFunction();





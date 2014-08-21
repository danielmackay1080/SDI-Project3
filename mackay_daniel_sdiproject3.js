//alert("JavaScript works!");
//Daniel Mackay
// SDI Project 3 1408

// Global Variables

var farmAnimals = [ 'Cows', 'Goats', 'Sheep', 'Dogs', 'Chickens'];
var numberVillagers = 40;
var monster1 = 'Cyclops';
var monster2 = 'Vampire';
var monster3 = 'Dragon';
var monster4 = 'Giant';
var helpVillagers = true


console.log('It is a fine sunny day, everyone is going about their business until they see a ' + monster4 + ' rustling the bushes' + '.');

// First function or Procedure

var warnVillage = function(argArray, helpVillagers){
		confirm('Warn villagers');
		if (helpVillagers === true){
		console.log('The villagers sound the alarm and prepare for attack');
			} else {
			console.log('The ' + argArray + ' are under attack' + '.')
		};
};
warnVillage(farmAnimals);

// The Second Function JSON Data For loop and Nested loop

console.log ('The alarm is sounded!');

var jsonFunction = function() {

	for (var firstKey in jsonData.theHeroes){
		for (var secondKey in jsonData.theHeroes[firstKey]){
			console.log(jsonData.theHeroes[firstKey][secondKey] + ' has arrived');
		}
	}
};
jsonFunction();

console.log('The Heroes have defeated the giant');

// The Third function Boolean Logic, while loop and math

console.log('The Heroes Notice a vampire attacking an orphanage');

var helpOrphan = function (numberVillagers){
	confirm('Help Orphans');
	if (helpVillagers === true){
	console.log('The Heroes have helped the orphans');
		} else {
			console.log('The Orphans escape');
				while (numberVillagers > 0 && numberVillagers <= 40){
				console.log(numberVillagers + ' Orphans have been saved');
				numberVillagers++;
				};
		return numberVillagers;
};
helpOrphan(numberVillagers);

console.log('The vampire has been defeated');

// The 4th Function: Nested conditional and String Function

console.log('A ' + monster3 + ' has appeared and is attacking a near by building.');

var defeatDragon = function(){
	confirm('Help Villagers');
	confirm('Help Animals');
		if (helpVillagers === true){
			console.log('We are all saved');
		} else {
		console.log('We are all doomed');
	};
};
defeatDragon();





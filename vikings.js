'use strict';

var Viking = function(name, health, strength) {
	this.name = name,
	this.health = randomHealth(),
	this.strength = randomStrength();
};

function randomHealth(){
	return Math.floor(Math.random() * (300 - 100)) + 100;
};

function randomStrength(){
	return Math.floor(Math.random() * (25 - 5)) + 5;
};

/*
function randomName() {
	var abecedario = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var name= "";

}
*/

var viking1 = new Viking("pepe", randomHealth(), randomStrength());
var viking2 = new Viking("paco", randomHealth(), randomStrength());
console.log(viking1);
console.log(viking2);

// The pit
function vikingsFight (vikingo1, vikingo2){
	var turns = 10;
	var atakeV1 = vikingo2.health - vikingo1.strength;
	var atakeV2 = vikingo1.health - vikingo2.strength;
	
	while (turns > 0 && atakeV1 > 0 && atakeV2 > 0 ) {
		vikingo2.health = vikingo2.health - vikingo1.strength;
		vikingo1.health = vikingo1.health - vikingo2.strength;
		
		turns--;
	};
	console.log("The fight is over!");

	if(viking1.health > viking2.health) {
		console.log('The winner is ' + viking1.name);
	} else if (viking2.health > viking1.health) {
		console.log('The winner is ' + viking2.name);
	};
};

vikingsFight(viking1, viking2);
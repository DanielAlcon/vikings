'use strict';

var Viking = function(name, health, strength) {
	this.name = name,
	this.health = health,
	this.strength = strength;
};

function randomHealth(){
	return Math.floor(Math.random() * (300 - 100)) + 100;
};

function randomStrength(){
	return Math.floor(Math.random() * (25 - 5)) + 5;
};

var viking1 = new Viking("pepe", randomHealth(), randomStrength());
var viking2 = new Viking("paco", randomHealth(), randomStrength());
console.log(viking1);
console.log(viking2);


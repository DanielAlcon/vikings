"use strict";

var Viking = function() {
	this.name = randomName(),
	this.health = random(100, 150),
	this.strength = random(7, 20);
};

var Saxon = function() {
	this.name = 'saxon',
	this.health = random(25, 100);
	this.strength = random(5, 15);
};

function random(min, max){
	return Math.floor(Math.random() * (max - min)) + min;
};

var nm3 = ["Æsa","Æstrid","Þuriðr","Abi","Aldis","Alfdis","Alfeid","Alof","Armod","Arnbjorg","Arngunn","Arnkatla","Arnora","Arnthrud","Asa","Asdis","Asfrid","Asgard","Asgerd","Ashild","Aslaug","Asleif","Asny","Asta","Astrid","Asvor","Aud","Audbjorg","Audhild","Bera","Bergljot","Bergthora","Bjartney","Bjorg","Bolla","Bothild","Brynhild","Dalla","Dotta","Drifa","Droplaug","Ermingard","Estrid","Fastvi","Freydis","Freygerd","Frida","Frideburg","Fridgerd","Gæierlaug","Geirhild","Geirlaug","Geirny","Gerd","Gerrid","Gillaug","Ginnlaug","Gjaflaug","Gorm","Greiland","Grelod","Grima","Grimhild","Gro","Groa","Guðný","Gudbjorg","Gudfinna","Gudfrid","Gudlang","Gudney","Gudny","Gudrid","Gudrun","Gunnhild","Gunnvor","Gyda","Gyrd","Gyrid","Halla","Hallbera","Hallberta","Halldis","Halldora","Hallfrid","Hallgerd","Hallgrim","Hallkatla","Hallveig","Hedinfrid","Heith","Helga","Herbjorg","Herdis","Herkja","Hervor","Hild","Hilde","Hildigunn","Hildirid","Hlif","Holmfrid","Holmlaug","Hrafnhild","Hrefna","Hrodny","Hungerd","Inga","Ingegärd","Ingeltore","Ingibjorg","Ingigerd","Ingirid","Ingirun","Ingithora","Ingrid","Ingulfrid","Ingun","Ingunn","Isgerd","Jaddvor","Jarngerd","Jodis","Jofrid","Joreid","Jorunn","Kadlin","Katla","Ketiloy","Ljot","Ljufa","Ljufu","Luta","Mœid","Maria","Matilda","Melkorka","Nidbiorg","Nidbjorg","Oddbjorg","Oddny","Odindis","Ogn","Olof","Ormhild","Osk","Ottkatla","Rafarta","Raghild","Ragna","Ragneid","Ragnfrid","Ragnhild","Rannveig","Ranveig","Reginleif","Runa","Sæunn","Salbjorg","Sibbe","Signy","Sigrid","Sigrunn","Sigvor","Siv","Skuld","Skur","Solveig","Solvor","Steinunn","Steinvor","Styrlaug","Svala","Svanhild","Svanlaug","Thjodhild","Thkatla","Thora","Thorballa","Thorbjorg","Thordis","Thorelf","Thorfinna","Thorfrid","Thorfrithr","Thorgærd","Thorgerd","Thorgrima","Thorgunna","Thorhalla","Thorhild","Thorkatla","Thorlaug","Thorljot","Thorunn","Thorve","Thorvor","Thraslaug","Thurid","Thyre","Thyri","Tofa","Tola","Tonna","Torgärd","Torhild","Torunn","Turid","Ulfeid","Ulfheid","Una","Unn","Valborg","Valgerd","Vandrad","Vigdis","Yngvild","Yri","Yrsa"];
var nm4 = ["Åsmundottir","Æinrididottir","Æirikdottir","Ærinmundottir","Ærnmundottir","Æsbiorndottir","Æskildottir","Ævardottir","Øpirdottir","Øybiorndottir","Øystæindottir","Øystendottir","Abidottir","Adilsdottir","Agmundrdottir","Agnardottir","Akidottir","Aleifrdottir","Alfdottir","Alfarindottir","Alfgeirdottir","Alfketilldottir","Alidottir","Alrikdottir","Alvidottir","Amundidottir","Andottir","Anakoldottir","Andvettdottir","Anlafdottir","Anundottir","Arfastdottir","Aridottir","Arinbjorndottir","Armodottir","Arndottir","Arnbjorndottir","Arnfinndottir","Arngeirdottir","Arngrimdottir","Arnidottir","Arnkeldottir","Arnketilldottir","Arnlaugdottir","Arnljotdottir","Arnordottir","Arnsteindottir","Arnthordottir","Arnulfrdottir","Arnvidottir","Arondottir","Asbjorndottir","Asbrandottir","Asfrithdottir","Asgautdottir","Asgeirdottir","Asgrimdottir","Askeldottir","Asketilldottir","Aslakdottir","Asmundottir","Assurdottir","Asulfdottir","Asvaldottir","Asvardottir","Athilsdottir","Atlidottir","Atsurrdottir","Auðunardottir","Audbjorndottir","Audgisildottir","Audgislidottir","Audolfdottir","Audundottir","Austmathrdottir","Authgrimdottir","Authketilldottir","Authulfdottir","Authundottir","Autidottir","Balkidottir","Ballidottir","Bankidottir","Bardottir","Bardidottir","Baugdottir","Beigarthdottir","Beinerdottir","Beinirdottir","Bergdottir","Bergfinndottir","Bergthordottir","Bergvidottir","Bersidottir","Biordottir","Biorn dottir","Birningdottir","Bjalfidottir","Bjalkidottir","Bjarkidottir","Bjarnidottir","Bjartmardottir","Bjor dottir","Bjorgolfdottir","Bjorgulfdottir","Bjorndottir","Bjornulfdottir","Blængdottir","Blanndottir","Bodalfdottir","Bodvardottir","Boedottir","Bollidottir","Bolverkdottir","Borgardottir","Borkdottir","Borstigdottir","Bothvardottir","Botulfdottir","Bræsidottir","Bragidottir","Bramdottir","Brandottir","Bretakollrdottir","Brodd-Helgidottir","Broddidottir","Brodirdottir","Brondulfdottir","Brunidottir","Brusidottir","Buidottir","Byrnjolfdottir","Cnutdottir","Dagdottir","Dagfinndottir","Dandottir","Diarfdottir","Dunfjalldottir","Dyridottir","Edgardottir","Egildottir","Eidottir","Eilifdottir","Einardottir","Eindrididottir","Eirikdottir","Eldgrimdottir","Elgfrothidottir","Englidottir","Erlendottir","Erlingdottir","Ernmundottir","Erpdottir","Eskildottir","Eydisdottir","Eyjolfdottir","Eysteindottir","Eyvaldottir","Eyvindottir","Fargrimdottir","Farmanndottir","Farthegndottir","Fastulfdottir","Finndottir","Finnleikdottir","Finnvidottir","Firthgestdottir","Flokidottir","Flosidottir","Folkbiorndottir","Folkmardottir","Fornidottir","Frømundottir","Freysteindottir","Fridgeirdottir","Fridmundottir","Frodidottir","Frostulfdottir","Frothidottir","Gædadottir","Gæiradottir","Gæirmundottir","Gærhialmdottir","Gærrardottir","Gætirdottir","Galtidottir","Gamaldottir","Gamlidottir","Gardardottir","Gardidottir","Gaukdottir","Gautdottir","Gautidottir","Gavtvidottir","Geirdottir","Geirfinndottir","Geirleifdottir","Geirmundottir","Geirolfdottir","Geirsteindottir","Geirthjofdottir","Geitirdottir","Geitirgestdottir","Gellirdottir","Geridottir","Gestdottir","Giermundottir","Gillidottir","Gilsdottir","Gislidottir","Gizordottir","Gizurdottir","Glamdottir","Glumdottir","Gnupadottir","Gnupidottir","Gormdottir","Granidottir","Gretterdottir","Grettirdottir","Grimdottir","Grimardottir","Grimkeldottir","Grimolfdottir","Grimwaldottir","Grindottir","Griotgardottir","Grisdottir","Grithdottir","Grjotgardottir","Gudadottir","Gudbrandottir","Gudlaugdottir","Gudleifdottir","Gudmundottir","Gudrikdottir","Gudrodottir","Gudværdottir","Gufidottir","Gullidottir","Gunbjorndottir","Gunnaldottir","Gunnardottir","Gunnbjorndottir","Gunnhautrdottir","Gunnidottir","Gunnkeldottir","Gunnlæifdottir","Gunnlaugdottir","Gunnleifdottir","Gunnsteindottir","Gunnulfdottir","Gunnvidottir","Guthheredottir","Guthormdottir","Guthrothdottir","Guthrumdottir","Gylfidottir","Gyrdottir","Hämingdottir","Hæfnirdottir","Hælæifdottir","Hælgidottir","Hæmingdottir","Hængdottir","Haddottir","Hafdottir","Hafgrimdottir","Haflididottir","Hafrdottir","Hagidottir","Hakidottir","Haklangdottir","Hakondottir","Halfdandottir","Halftandottir","Halldottir","Halladottir","Hallbjorndottir","Halldordottir","Hallfredottir","Hallfridottir","Hallgrimdottir","Hallidottir","Hallkeldottir","Hallmundottir","Hallsteindottir","Hallvardottir","Halvdandottir","Hamdottir","Hamundottir","Hanefdottir","Haraldottir","Hardbeindottir","Hardrefildottir","Harekdottir","Hasteindottir","Haukdottir","Havardottir","Hedindottir","Heggdottir","Helgidottir","Hemingdottir","Heriolfdottir","Herjolfdottir","Herlaugdottir","Herludottir","Hermundottir","Hersteindottir","Hialtidottir","Hildiglumdottir","Hildirdottir","Hiorvardottir","Hjalkardottir","Hjaltidottir","Hjarrandidottir","Hjordottir","Hjorleifdottir","Hjortdottir","Hjorvarthdottir","Hlennidottir","Hlodvirdottir","Hognidottir","Holmfastdottir","Holmgavtdottir","Holmgeirdottir","Holmstæindottir","Holmsteindottir","Hordottir","Hoskuldottir","Hosvirdottir","Hottdottir","Hrærekdottir","Hrafndottir","Hrafnkeldottir","Hrafnvartrdottir","Hragnelfdottir","Hranfastdottir","Hranidottir","Hrappdottir","Hreidadottir","Hreidardottir","Hreindottir","Hreitharrdottir","Hrifladottir","Hringdottir","Hroaldottir","Hroardottir","Hrodgæirdottir","Hrodgeirdottir","Hrodidottir","Hrokdottir","Hrolfdottir","Hrollaugdottir","Hromundottir","Hrossbjorndottir","Hrosskeldottir","Hrosskelldottir","Hrossketildottir","Hrutdottir","Hunbogidottir","Hundidottir","Hundolfrdottir","Hvitserkdottir","Iarldottir","Iarlabankidottir","Iarundottir","Illugidottir","Ingemardottir","Ingidottir","Ingibjorgdottir","Ingifastdottir","Ingimardottir","Ingimundottir","Ingjaldottir","Ingolfdottir","Ingulbjörndottir","Ingvardottir","Iogæirdottir","Ioketilldottir","Iorthrdottir","Iorundottir","Irenmundottir","Iridottir","Iricdottir","Isgautdottir","Isidottir","Isleifdottir","Isulfdottir","Iulidottir","Ivardottir","Jarlabankidottir","Jarlebankedottir","Jarnskeggidottir","Jobjorndottir","Johandottir","Jokuldottir","Jomardottir","Jondottir","Jorundottir","Käredottir","Kætiløydottir","Kætildottir","Kætilfastdottir","Kætilmundottir","Kabbidottir","Kadaldottir","Kalfdottir","Kardottir","Karidottir","Karldottir","Karlidottir","Karsidottir","Kaupmanndottir","Ketildottir","Ketilbiorndottir","Ketilbjorndottir","Ketilldottir","Kispingdottir","Kjallakdottir","Kjartandottir","Kjotvidottir","Klakkrdottir","Knútrdottir","Knutdottir","Kodrandottir","Koigrimdottir","Koldottir","Kolbeindottir","Kolfinndottir","Kolldottir","Kollskeggdottir","Kollsveindottir","Kolskeggdottir","Konaldottir","Koridottir","Kormakdottir","Kotkeldottir","Kotkelldottir","Krakidottir","Kveldulfdottir","Lambidottir","Leidolfdottir","Leifdottir","Leiknirdottir","Lifolfdottir","Lifstændottir","Linidottir","Liutdottir","Ljotdottir","Lodindottir","Lodmundottir","Loptdottir","Ludindottir","Lytingdottir","Magnusdottir","Makdottir","Mannidottir","Mardottir","Meldundottir","Modolfdottir","Moldofdottir","Mordottir","Mursidottir","Nærfidottir","Naddodottir","Nafnidottir","Nasidottir","Nefsteindottir","Nikolasdottir","Njaldottir","Northridottir","Oddottir","Oddløgdottir","Oddleifdottir","Odinkardottir","Ofeigdottir","Ofiegdottir","Ogmundottir","Olædottir","Olæifdottir","Olafdottir","Oleifdottir","Olvirdottir","Onämdottir","Ondottdottir","Onemdottir","Onguldottir","Onundottir","Orøkiadottir","Orestdottir","Orgumleididottir","Orlygdottir","Ormdottir","Orndottir","Ornolfdottir","Ornulfdottir","Orridottir","Orrindottir","Ospakdottir","Osvaldottir","Osvifdottir","Oswaldottir","Otkeldottir","Otryggdottir","Ottardottir","Oystæindottir","Ozurdottir","Pauldottir","Ragidottir","Ragnardottir","Ragnfastdottir","Ragnvaldottir","Raudebjorndottir","Refdottir","Regindottir","Reinndottir","Rodmardottir","Rognvaldottir","Runolfdottir","Sæbbidottir","Sæmundottir","Sævildottir","Saksidottir","Samdottir","Saxidottir","Selkollrdottir","Serkdottir","Sibbidottir","Sigbjorndottir","Sigbrandottir","Sigebeorhtdottir","Sigeferthdottir","Sigegardottir","Sigeheahdottir","Sigehelmdottir","Sigeheredottir","Sigelacdottir","Sigemærdottir","Sigemundottir","Sigenothdottir","Sigerædottir","Sigericdottir","Sigestældottir","Sigeweardottir","Sigewinedottir","Sigewulfdottir","Sigfastdottir","Sigfusdottir","Sigguatrdottir","Sighaddottir","Sighvatdottir","Sigmundottir","Sigtryggdottir","Sigurdottir","Sigvaldidottir","Sigvatdottir","Sigvidottir","Sinfiotlidottir","Singasvendottir","Skœdirdottir","Skallagrimdottir","Skamkeldottir","Skapdottir","Skaptidottir","Skardottir","Skardidottir","Skarfdottir","Skeggdottir","Skeggidottir","Skialgdottir","Skididottir","Skjaldulfdottir","Skjoldottir","Skoptidottir","Skorridottir","Skufdottir","Skuldottir","Skulidottir","Skurfadottir","Skutidottir","Slodedottir","Slodidottir","Slothidottir","Snæ-Ulfdottir","Snæbjorndottir","Snækoldottir","Snorridottir","Sodottir","Sokkolfdottir","Solmundottir","Solvidottir","Sorlidottir","Spiallbudidottir","Spiutdottir","Spjutdottir","Stækardottir","Starkadottir","Starolfdottir","Starridottir","Steindottir","Steinardottir","Steinbitrdottir","Steinbjorndottir","Steingrimdottir","Steinkeldottir","Steinketilldottir","Steinmodottir","Steinolfdottir","Steinthordottir","Steinunndottir","Stigandidottir","Storolfdottir","Stufdottir","Sturladottir","Styrdottir","Styrbiorndottir","Styrkardottir","Styrkollrdottir","Styrmirdottir","Suitdottir","Sumarlidottir","Sumarlididottir","Surtdottir","Svæindottir","Svafardottir","Svalfidottir","Svandottir","Svartdottir","Svartbrandottir","Svartgeirrdottir","Svartkollrdottir","Svartlingrdottir","Sveindottir","Sveinbjorndottir","Svendottir","Svenidottir","Svertingdottir","Svinulfdottir","Svipdaydottir","Sweindottir","Teitdottir","Thangbrandottir","Thialfidottir","Thidrandidottir","Thidrikdottir","Thiodolfdottir","Thjodofldottir","Thjodoftdottir","Thjostolfdottir","Thokodolfdottir","Thometilldottir","Thoraldottir","Thoraldrdottir","Thorarindottir","Thorbergdottir","Thorbjorndottir","Thorbrandottir","Thordottir","Thorfastdottir","Thorfinndottir","Thorfrethrdottir","Thorgautdottir","Thorgeirdottir","Thorgestdottir","Thorgilsdottir","Thorgrimdottir","Thorhalldottir","Thorirdottir","Thorkeldottir","Thorkelldottir","Thorketildottir","Thorlakdottir","Thorleifdottir","Thorleikdottir","Thormardottir","Thormodottir","Thormothrdottir","Thoroardottir","Thorodottir","Thoroddottir","Thorolfdottir","Thorormdottir","Thorredottir","Thorstardottir","Thorsteindottir","Thorvaldottir","Thorvardottir","Thorvidottir","Thraindottir","Thrandottir","Throstdottir","Tjorvidottir","Tofidottir","Tokidottir","Toladottir","Toredottir","Torfidottir","Torradottir","Torstendottir","Tostidottir","Trandildottir","Trudottir","Tryggdottir","Tryggvidottir","Tufidottir","Tumidottir","Tyrfingdottir","Tyrkirdottir","Ubbeindottir","Ufidottir","Uglubathrdottir","Ulfdottir","Ulfardottir","Ulfbjorndottir","Ulfgrimdottir","Ulfketildottir","Ulfljotdottir","Ulfrikdottir","Ulvkildottir","Unidottir","Unndottir","Unnulfdottir","Värmodottir","Valbrandottir","Valgardottir","Validottir","Valthjofdottir","Vandildottir","Vandradottir","Vardottir","Varindottir","Vathlaussdottir","Vebjorndottir","Vebrandottir","Vegeirdottir","Vekeldottir","Veleifdottir","Vermundottir","Vertlithidottir","Vestardottir","Vesteindottir","Vestgeirdottir","Veturlididottir","Vidkunndottir","Vifildottir","Vigbjordottir","Vigfusdottir","Vigidottir","Vigotdottir","Vikardottir","Visätedottir","Vogdottir","Vottdottir","Waltheofdottir","Warydottir","Wealglistdottir","Wengodottir","Yngvardottir","Ysoppadottir"];

function randomName(){
	for(var i = 0; i < 1; i++){
		var rnd = Math.floor(Math.random() * nm3.length);
		var rnd2 = Math.floor(Math.random() * nm4.length);
		var names = nm3[rnd] + " " + nm4[rnd2];
	}
	return names;
}

// The pit

var viking1 = new Viking();
var viking2 = new Viking();

function vikingsFight (fighter1, fighter2){
	var turns = 10;
	var turnsToFinish = turns > 0;
	var b = fighter2.health - fighter1.strength > 0 && fighter1.health - fighter2.strength > 0;
	printFighters();

	while (turnsToFinish && b) {
		fighter2.health = fighter2.health - fighter1.strength;
		console.log('Oh, ' + fighter2.name + ' has been hit in ' + fighter1.strength + '! His remaining health is ' + fighter2.health);
		fighter1.health = fighter1.health - fighter2.strength;
		console.log('Oh, ' + fighter1.name + ' has been hit in ' + fighter2.strength + '! His remaining health is ' + fighter1.health);
		
		turns--;
		turnsToFinish = turns > 0;
		b = fighter2.health - fighter1.strength > 0 && fighter1.health - fighter2.strength > 0;
	};
	console.log("The fight is over!");
	checkWinner(fighter1, fighter2);

};

function printFighters(){
	console.log('The fight is about to begin... The fighters are ' + viking1.name + ' and ' + viking2.name);
	console.log(viking1);
	console.log(viking2);
};

function checkWinner(fighter1, fighter2){
	if(fighter1.health > fighter2.health) {
		console.log('The winner is ' + fighter1.name);
	} else if (fighter2.health > fighter1.health) {
		console.log('The winner is ' + fighter2.name);
	};
}

vikingsFight(viking1, viking2);

function printSeparator(){
	console.log('=====================================================================================');
}

printSeparator();
// Saxons


var saxon1 = new Saxon();

//The assault
var vikingsArmy = [];
var saxonsArmy = [];

function createArmy(){
	var randomNumberVikings = random(20, 100);
	var randomNumberSaxons = random(30, 200);
	do {
		randomNumberVikings--;
		var viking = new Viking();
		vikingsArmy.push(viking);
		}
		while (randomNumberVikings > 0);
	do {
		randomNumberSaxons--;
		var saxon = new Saxon();
		saxonsArmy.push(saxon);
		}
		while (randomNumberSaxons > 0);
};

createArmy();

function randomFighter(myArray) { 
	return myArray[Math.floor(Math.random() * myArray.length)];
}

var Assault = function() {
	var vikingFighter = randomFighter(vikingsArmy);
	var saxonFighter = randomFighter(saxonsArmy);
	this.turns = random(5, 8),
	this.vikingsArmy = vikingsArmy,
	this.saxonsArmy = saxonsArmy,

	this.attacks = function () {
		//while (turnsLeft > 0) {
			// viking attacks
			vikingFighter.health = vikingFighter.health - saxonFighter.strength;
			if (vikingFighter.health <= 0) {
				vikingFighter = replaceDead(this.vikingsArmy, vikingFighter);
			} else if(this.vikingsArmy.length > 0) {
				console.log(vikingFighter.name + ' has been hit by a saxon! His health now is ' + vikingFighter.health);	
			}
			
			//saxon attacks
			saxonFighter.health = saxonFighter.health - vikingFighter.strength;
			if (saxonFighter.health <= 0) {
				saxonFighter = replaceDead(this.saxonsArmy, saxonFighter);
			} else if(this.saxonsArmy.length > 0){
				console.log(saxonFighter.name + ' has been hit by a viking! His health now is ' + saxonFighter.health);

			}
			//turnsLeft--;
		//}
		//return ("There are no turns left for this battle. The fighters are going to get some beers");
	}

	/*function replaceDeadViking() {
		var deadViking = vikingsArmy.indexOf(vikingFighter);
		console.log(' === ' + vikingFighter.name + ' IS DEAD. REPLACING... ===');
		vikingsArmy.splice(deadViking, 1);
		if(vikingsArmy.length === 0) {
			console.log("There's no vikings left!");
		} else {
			vikingFighter = randomFighter(vikingsArmy);
			console.log('=== New viking is going to fight ===');
		}
	}

	function replaceDeadSaxon() {
		var deadSaxon = saxonsArmy.indexOf(saxonFighter);
		console.log(' === SAXON DEAD. REPLACING... ===');
		saxonsArmy.splice(deadSaxon, 1);			
		if(saxonsArmy.length === 0) {
			console.log("There's no saxons left!")
		} else {
			saxonFighter = randomFighter(saxonsArmy);
			console.log('=== New saxon is going to fight ===');
		}
	}*/

	function replaceDead(army, fighter) {
		var dead = army.indexOf(fighter);

		if(fighter === vikingFighter) {
			console.log('=== New viking is going to fight ===');
		} else if (fighter === saxonFighter) {
			console.log('=== New saxon is going to fight ===')
		}

		console.log(' === ' + fighter.name + ' DEAD. REPLACING... ===');
		army.splice(dead, 1);			
		if(army.length === 0) {
			console.log("There's no saxons left!")
		} else {
			fighter = randomFighter(army);
			console.log('=== New ' + fighter.name + ' is going to fight ===');
		}
		return fighter;
	}

	this.howManyFighters = function (){
		console.log(vikingsArmy.length + ' vikings VS ' + saxonsArmy.length + ' saxons');
		console.log("Turns for each fight " + this.turns);
	}

	this.printAssaultResult = function (){
		console.log('There are ' + vikingsArmy.length + ' vikings left');
		console.log('There are ' + saxonsArmy.length + ' saxons left');
		if (vikingsArmy.length > saxonsArmy.length) {
			console.log ("Viking women slaughtered saxons' kids and raped their men!! FOR ODIN!!!!");
		} else if (vikingsArmy.length < saxonsArmy.length){
			console.log("Vikings have been humiliated by the mighty saxons!")
		} else if (vikingsArmy.length == saxonsArmy.length){
			console.log("Vikings and saxons made an arrangement and ended the hostilities");
		} else {
			console.log("What the fuck did you do?")
		}
	}
}

Assault.prototype.start = function() {
	this.howManyFighters();

	while (vikingsArmy.length > 0 && saxonsArmy.length > 0) {
		this.attacks();
	};

	this.printAssaultResult();		
}

var assault1 = new Assault();
assault1.start();

/*
- constructores de Viking y Saxon INHERITANCE
- funciones de createArmy
- funciones de reemplazar cadáveres
- this.attacks (ataques de viking y saxon)
*/
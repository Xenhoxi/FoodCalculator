function compute() {
	const k1 = {
		"autres": 1.0,
	};
	const k2 = {
		"hyperactif": 1.2,
		"actif": 1.1,
		"normal": 1.0,
		"calme": 0.9,
		"sedentaire": 0.8,
	}
	const kc = {
		"chaud": 1.2,
		"interieur": 1,
		"temperer": 1.1,
		"froid": 1.3,
		"hivernales": 1.5,
	}
	const sterilise = {
		"Oui": -0.1,
		"Non": 0,
	}
	let menu_race = document.getElementById("menu-race").value;
	let poids = document.getElementById("poids").value;
	let menu_activite = document.getElementById("menu-activite").value;
	let is_sterilise = document.getElementById("menu-sterilise").value;
	let menu_habitat = document.getElementById("menu-habitat").value;
	console.log(menu_race, k1[menu_race]);
	let pm = (poids ** 0.75);
	console.log("PM=", pm)
	let adjust_k2 = k2[menu_activite];
	if (adjust_k2 >= 1)
		adjust_k2 -= sterilise[is_sterilise];
	console.log(kc[menu_habitat], k1[menu_race], adjust_k2)
	let besoin_energetique = 132 * pm * kc[menu_habitat] * k1[menu_race] * adjust_k2;
	let res = document.getElementById("res");
	res.innerHTML = "Besoin energetiques: " + Math.round(besoin_energetique) + " Kcal/Jour";
}

function calcul_apport_croquettes() {
	let humidite = document.getElementById("humidite").value;
	let proteines = document.getElementById("proteines").value;
	let mg = document.getElementById("mg").value;
	let fibres = document.getElementById("fibres").value;
	let cendres = document.getElementById("cendres").value;
	
	een = 100 - humidite - proteines - mg - fibres - cendres;
	energie_metabolique = 3.5 * proteines + 3.5 * een + 8.5 * mg; // En Kcal/100g
	energie_metabolique = energie_metabolique * 10; // En Kcal/kg
	let em_display = document.getElementById("em");
    if (humidite && proteines && mg && fibres && cendres)
	    em_display.innerHTML = "Energie metabolique: " + energie_metabolique + " Kcal/Kg";
    else
        em_display.innerHTML = "Energie metabolique: Pas assez d'information sur l'alimation!";

}

if (document.getElementById("humidite")){
	let cendre = document.getElementById("humidite");
	cendre.addEventListener('input' ,calcul_apport_croquettes);
}
if (document.getElementById("proteines")){
	let cendre = document.getElementById("proteines");
	cendre.addEventListener('input' ,calcul_apport_croquettes);
}
if (document.getElementById("mg")){
	let cendre = document.getElementById("mg");
	cendre.addEventListener('input' ,calcul_apport_croquettes);
}
if (document.getElementById("fibres")){
	let cendre = document.getElementById("fibres");
	cendre.addEventListener('input' ,calcul_apport_croquettes);
}
if (document.getElementById("cendres")){
	let cendre = document.getElementById("cendres");
	cendre.addEventListener('input' ,calcul_apport_croquettes);
}
if (document.getElementById("menu-race")){
	let race = document.getElementById("menu-race");
	race.addEventListener('input' , compute);
}
if (document.getElementById("poids")){
	let poids = document.getElementById("poids");
	poids.addEventListener('input' , compute);
}
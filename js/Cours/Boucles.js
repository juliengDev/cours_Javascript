// ====== La boucle do ... while ======
// let prenom;
// do {
//     prenom = prompt("Quel est votre prenom");
// } 
// while(prenom == "" || prenom == null);
// alert("Bonjour " + prenom) 


// ====== la boucle while ======

// let i = 0;

// while(i < 5) {
//     console.log("Ligne " + i)
//     i++;
// }

// ====== la boucle for ======

// for (let i = 0; i < 5; i++) {
//     console.log("Ligne " + i)
// }

// ====== la boucle for in ======
// let panier = ["fraise", "banane", "poire",]

// for (let fruit in panier){ // la variable fruit contient l'index des elements du tableau
//     console.log(fruit) // Affiche 0 1 2
// }

// for (let fruit in panier) {
//     console.log(panier[fruit])  // Affiche la valeur des elements de notre tableau
// }                               // Affiche donc fraise banane poire

// ====== la boucle for of ======

// let panier = ["fraise", "banane", "poire",]

// for (let fruit of panier) {
//     console.log(fruit) // Affiche la valeur des elements de notre tableau
// }

// for  (let fruit of panier) {
//     console.log(panier.indexOf(fruit)) // Affiche l'index des elements de notre tableau
// }

// ====== la boucle forEach ======


// let listeDePays = ['France','Belgique','Japon','Maroc']
// Premiere methode avec une fonction anonyme
// listeDePays.forEach(function(pays) {
//     console.log(pays)
// })

// Deuxieme methode avec une fonction flechee
// listeDePays.forEach(pays => {console.log(pays)});
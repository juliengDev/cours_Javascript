// fonction qui va afficher bonjour
// function direBonjour() {
//     alert("Bonjour !")
// }
// direBonjour();

// fonction qui va afficher bonjour avec un parametre
// function direBonjour(prenom) {
//     alert("Bonjour " + prenom)
// }
// direBonjour("Florian");

// Variable locale = variable qui existe uniquement dans le contexte de sa declaration
// let nombreUn = 4, nombreDeux = 7;

// On renvoi le resultat de l'addition dans la fonction  et on l'affiche dans la console.
// function addition(a, b) {
//    return a + b;
// }
// console.log(addition(nombreUn, nombreDeux));

// function demanderAge() {
//     let age = prompt("Quel est votre age ?")
//     console.log("Vous avez " + age + " ans")
// }

// function prevoirAge() {
//     let age = prompt("Quel est votre age ?") // renvoi une string
//     age = parseInt(age) // converti en nombre Entier
//     age = parseFloat(age) // converti en nombre a Virgule
//     age = Number(age) // converti en Nombre
// alert("Bientot vous aurez "+ (age + 1) + " ans")
// };

// nombre = 45;
// console.log(typeof nombre); // renvoi number
// nombreEnString = nombre.toString()
// console.log(typeof nombreEnString); // renvoi string

// ============ Les fonctions anonymes ============

// Premiere methode
// let fonctionAnonyme = function() {
//     console.log("Je suis une fonction anonyme")
// }
// fonctionAnonyme();

// Deuxieme methode
// A renseigner sur une seule ligne
// (function(){ console.log("Je suis une fonction anonyme") })();




// =========== Fonctions recursives ============

// On appel une fonction a l'interieur d'elle meme
// function timer(secondes) {
//     if (secondes > 0) {
//         console.log(secondes)
//         timer(secondes - 1)
//     }else {
//         console.log(secondes);
//     }
// }

// timer(10);

// ============ Fonctions flechees ============

// let maFonction = () => console.log('test')
// maFonction()


// ============ Les fermetures (closures) ============

// function timer() {
//     let secondes = 0;

//     let maClosure = () => {
//         return ++secondes;
//     }
//     return maClosure; 
//     // la fonction closure permet  d'enregistrer le resultat de la fonction dans une variable
// }

// let monTimer = timer();
// console.log(monTimer()) // Affiche 1
// console.log(monTimer()) // Affiche 1
// console.log(monTimer()) // Affiche 1


// ============ le REST parameter ============

// function addition(...nombres) { // les ... indiquent a la javascript que c'est un rest parameter
    
//         let resultat = 0;
//     nombres.forEach( (nombre) => {
//         resultat =+ nombre;
//     });
//     console.log(resultat)
// }
// addition(4,5,6,7,8,89)


// ============ 

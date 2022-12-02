// ======= les operateurs de comparaisons =======
// heure == 11 egale a la valeur
// heure === 11 egale a la valeur et au type
// heure != 11 different de la valeur
// heure !== 11 different de la valeur et du type
// heure < 11
// heure > 11
// heure <= 11
// heure >= 11

// let heure = 19;

// if (heure < 12) {
//     console.log("C'est le matin")
// }else if (heure <= 18) {
//     console.log("C'est l'apres-midi")
// }else{
//     console.log("C'est la soiree")
// } 

// age = 21;

//  if(age < 18){
//     console.log("Vous n'etes pas majeur")
//  }else if(age <= 20) {
//     console.log("Vous etes majeur en France")
//  }else{
//     console.log("Vous etes majeur partout, a vous les casinos !")
//  }

// consommable = "banane"

// ====== Les Switchs =======

// switch(consommable) {
//     case "banane" :
//     case "mangue" :
//     case "abricot" :
//         console.log("Ceci est un fruit")
//     break;

//     case "haricot" :
//     case "pomme de terre" :
//     case "carotte" :
//         console.log("Ceci est un legume")
//     break;
    
//     default:
//         console.log("Ce n'est ni un fruit ni un legume")
// }

// ======= Les operateurs AND et OR =======

// (Symbole double esperluète pour le AND
// true && true = true 
// true && false = false
// false && false = false

// Symbole double pipe pour le OR 
// true || true = true 
// true || false = true
// false || false = false

// ======= L'operateur NOT =======

// utiliser le !, la condition sera inverser
// true = true
// !true = false

// ======= Conditions ternaires =======

let x = 2;

x > 5 ? console.log(x + " est superieur a 5") : console.log(x +" est inferieur a 5")